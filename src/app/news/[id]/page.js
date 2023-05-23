import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const url = `${process.env.URL}/api/news/${id}`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  const news = data.data;
  console.log({ news });
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
        <Image
          className="w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
          src={`${news?.attributes?.image}`} height={1000} width={500}
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {news?.attributes?.title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
           {news?.attributes?.description}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {news?.attributes?.author}
          </p>
          <Link href={news?.attributes?.url} className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"><u>
            More Details</u>
          </Link>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {news?.attributes?.source}
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
