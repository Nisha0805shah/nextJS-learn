import Image from "next/image";
import React from "react";

const page = async ({params}) => {
    console.log(params);
  const id = params;
//   console.log(id);
  const url = `${process.env.URL}/api/members/${id.id}?populate=*`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };
  const res = await fetch(url, requestOptions);
  const data = await res.json();
  const member = data.data.attributes;
//   console.log(member);
  return (
    <>
      <div>
        <Image
          className="w-32 rounded-full"
          src={`${process.env.URL}${member?.photo?.data?.attributes?.url}`}
          height={200}
          width={200}
          alt="Avatar"
        />
        <h5 class="mb-2 text-xl font-medium leading-tight">{member.firstname}</h5>
        <p class="text-neutral-500 dark:text-neutral-400">{member.lastname}</p>
        <p class="text-neutral-500 dark:text-neutral-400">{member.mobile}</p>

      </div>
    </>
  );
};

export default page;
