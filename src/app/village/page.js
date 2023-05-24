import React from 'react'
import ListVillage from '../components/ListVillage';

const village = async () => {
  const url = `${process.env.URL}/api/villages`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  }
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  const villageData = data.data;

  return (
    <>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        <div>
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Villages
        </caption>
          {/* <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Action button</span>Action
                            <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button> */}
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for villages" />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Name
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Position
            </th> */}
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          {
            villageData.map((element) => {
              return <ListVillage key={element.id}{...element} />
            })
          }
          </tbody>
       
      </table>
      </div>

    </>
  )
}

export default village