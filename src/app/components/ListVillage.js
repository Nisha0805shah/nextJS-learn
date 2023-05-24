import React from "react";
import Link from "next/link";
import Image from "next/image";

const ListVillage = (element) => {
  const { id, attributes } = element;
//   console.log(attributes);
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="flex items-center px-4 py-1 text-gray-900 whitespace-nowrap dark:text-white"
        >
          {/* <Image
            src="/village1.jpg"
            className="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap dark:text-white rounded-full"
            height={50}
            width={100}
            alt="=Village image"
          /> */}
          {/* <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"> */}
          <div className="pl-3">
            <div className=" font-semibold">{attributes.name}</div>
          </div>
        </th>
        <td className="px-4 py-2">
          <div className="flex item-center">
            {attributes.activated ? (
                <div className="flex flex-row items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              <div>Subscribed</div>
              </div>
            ) : (
                <div className="flex flex-row items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2">
              </div>
              <div>Unsubscribed</div>
              </div>
            )}
          </div>
        </td>
        <td className="px-4 py-2">
          <Link
            href={`/village/${id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ListVillage;
