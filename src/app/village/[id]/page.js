import Image from 'next/image';
import React from 'react'

const page = async ({ params }) => {
  const id = params.id;
  const url = `${process.env.URL}/api/villages/${id}?populate=*`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  }
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  // console.log({data});
  const villageData = data.data.attributes;
  const { city, state, sub_district, members, notices, news, village_galleries, gallery,authorities } = villageData;
  // console.log(city,state,sub_district,members,notices,news,village_galleries,gallery);
  // console.log(city?.data?.attributes?.name);
  // console.log(state?.data?.attributes?.name);
  // console.log(sub_district?.data?.attributes?.name);
  // console.log({authorities});
  const noticeArr = notices?.data;
  const newsArr = news?.data;
  // console.log(newsArr);
  // const galleryArr = console.log(village_galleries);
  const authorityArr = authorities.data;
  console.log(authorityArr);
  const galleryArr = gallery.data;
  // console.log(galleryArr[0].attributes);



  // console.log({city});
  // console.log({villageData});
  return (
    <>
      {/* <Image src="/village1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={1000} width={1000} alt="=Village image" /> */}

      <h1><b><u>{villageData.name}</u></b></h1>
      <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          
          {
            galleryArr?.map((element, index) => {
              // console.log(`${process.env.URL}${element.attributes.url}`);
              return (
                <div key={index}>

                  {/* <div className="hidden duration-700 ease-in-out" data-carousel-item> */}
                    {/* <Image src="/village1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={1000} width={1000} alt="=Village image" /> */}
                    <Image src={`${process.env.URL}${element.attributes.url}`} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={1000} width={1000} alt="image" />
                    {/* <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""> */}
                  {/* </div> */}


                </div>
              )
            })
          }
        </div>
        <div className="flex justify-center items-center pt-4">
          <button type="button" className="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      {/* <div>Dynamic</div> */}
      <h1><b><u>City  </u></b>---------{city?.data?.attributes?.name}</h1>
      <h1><b><u>State </u></b>----------{state?.data?.attributes?.name}</h1>
      <h2><b><u>SubDistrict </u></b>---------{sub_district?.data?.attributes?.name}</h2>
      <h1><b>Notices</b></h1>
      <div className='flex flex-row flex-wrap border-indigo-600'>
        {
          noticeArr?.map((element, index) => {
            return (

              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80">
                {/* <Image className="rounded-t-lg" src={`${element?.attributes?.image}`} alt='image' width={100} height={100}/> */}
                {/* // <img className="rounded-t-lg" src={element.attributes.url} alt="image" /> */}

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.attributes.heading}</h5>
                  </a>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.attributes.description}...</p> */}
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

            )
          })
        }
      </div>

      <h1><b>News</b></h1>
      <div className='flex flex-row flex-wrap border-indigo-600'>
        {
          newsArr?.map((element, index) => {
            return (

              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80">
                <Image className="rounded-t-lg" src={`${element?.attributes?.image}`} alt='image' width={400} height={100}/>
                {/* // <img className="rounded-t-lg" src={element.attributes.url} alt="image" /> */}

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.attributes.title}</h5>
                  </a>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.attributes.description}...</p> */}
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

            )
          })
        }
      </div>

      <h1><b>Authorities</b></h1>
      <div className='flex flex-row flex-wrap border-indigo-600'>
        {
          authorityArr?.map((element, index) => {
            // console.log(element);
            return (

              <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80">
                {/* <Image className="rounded-t-lg" src={`${element?.attributes?.image}`} alt='image' width={100} height={100}/> */}
                {/* // <img className="rounded-t-lg" src={element.attributes.url} alt="image" /> */}

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.attributes.designation}</h5>
                  </a>
                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.attributes.description}...</p> */}
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

            )
          })
        }
      </div>

    </>
  )
}

export default page