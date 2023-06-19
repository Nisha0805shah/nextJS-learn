
export class API {
  _token = null;
  ​
  constructor() {
    if (!API._instance) {
      API._instance = this;
    }
    const state = store?.getState();
    this.token = state?.user?.userToken;
    return API._instance;
  }
​
  get token() {
    return this._token;
  }
​
  set token(token) {
    this._token = token;
  }
​
  getToken() {
    const state = store?.getState();
    token = state?.user?.userToken;
    return token;
  }
​
  async request(url, { method, headers, payload }, checkAuthentication = true) {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (checkAuthentication) {
      if (!this.token) {
        this.token = this.getToken();
      }
      defaultHeaders["Authorization"] = `Bearer ${this.token}`;
    }
​
    return await fetch(url, {
      method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
​
  get(url, headers, checkAuthentication = true) {
    return this.request(
      url,
      { method: "GET", headers },
      checkAuthentication
    ).then((response) => {
      return response.json();
    });
  }
​
  post(url, payload, headers, checkAuthentication = true) {
    return this.request(
      url,
      { method: "POST", headers, payload },
      checkAuthentication
    ).then((response) => {
      return response.json();
    });
  }
​
  put(url, payload, headers, checkAuthentication = true) {
    return this.request(
      url,
      { method: "PUT", headers, payload },
      checkAuthentication
    ).then((response) => {
      return response.json();
    });
  }
​
  delete(url, headers, checkAuthentication = true) {
    return this.request(
      url,
      { method: "DELETE", headers },
      checkAuthentication
    ).then((response) => {
      return response.json();
    });
  }
​
  async uploadFile(uri, path, villageId) {
    const state = store?.getState();
    return FileSystem.uploadAsync(`${API_URL}/upload`, uri, {
      fieldName: 'files',
      httpMethod: 'POST',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      parameters: {
        village: villageId || 1,
        path
      },
      headers: {
        authorization: `Bearer ${this.token}`,
      }
    }).then((response) => {
      return JSON.parse(response?.body);
    });
  }
​
  async uploadFiles(fileUris, path, villageId) {
    return Promise.all(fileUris.map(uri => this.uploadFile(uri, path, villageId))).then(results => results[0])
  }
}
​
export default API;