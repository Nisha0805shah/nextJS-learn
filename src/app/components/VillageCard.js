import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const VillageCard = (element) => {
    const {id,attributes} = element;
  return (
   
    <div className='flex-row  mt-6 h-40 w-64 px-8'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
            <Image  className="h-auto max-w-full" src="/village1.jpg" width={120} height={70} alt='logo'/>

        </a>
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{attributes.name}</h5>
            <Link href={`/village/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </Link>
        </div>
    </div>
    </div>

  )
}

export default VillageCard