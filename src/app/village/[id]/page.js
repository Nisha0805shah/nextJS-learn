import React from 'react'
import village from '../page';

const page = async({params}) => {
  const id = params.id;
  const url = `${process.env.URL}/api/villages/${id}?populate=*`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method : 'GET',
    headers : {'Authorization':`Bearer ${token}`}
  }
  const res = await fetch(url,requestOptions);
  const data = await res.json();
  // console.log({data});
  const villageData = data.data.attributes;
  const {city,state,sub_district,members,notices,news,village_galleries,gallery} = villageData;
  // console.log(city,state,sub_district,members,notices,news,village_galleries,gallery);
  console.log(city?.data?.attributes?.name);
  console.log(state?.data?.attributes?.name);
  console.log(sub_district?.data?.attributes?.name);
  const noticeArr = console.log(notices?.data);
  const newsArr = console.log(news?.data);
  // const galleryArr = console.log(village_galleries);
  const memberArr = console.log(members.data);
  const galleryArr = console.log(gallery.data);
  
  // console.log({city});
  // console.log({villageData});
  return (
    <>
    <div>Dynamic</div>
    <h1>{city?.data?.attributes?.name}</h1>
    <h1>{state?.data?.attributes?.name}</h1>
    <h2>{sub_district?.data?.attributes?.name}</h2>
    <h1><b>Notices</b></h1>
    {/* {
      noticeArr.map((element)=>{
        <>
         <h2>{element.attributes.heading}</h2>
         <h2>{element.attributes.description}</h2>
         <h2>{element.attributes.status}</h2>
         </>
      })
    } */}
    </>
  )
}

export default page