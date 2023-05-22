import React from 'react'
import Link from 'next/link'
import VillageCard from '../components/VillageCard';

const village = async () => {
  const url = `${process.env.URL}/api/villages`;
  const token = process.env.AUTH_TOKEN;
  const requestOptions = {
    method : 'GET',
    headers : {'Authorization':`Bearer ${token}`}
  }
  const res = await fetch(url,requestOptions);
  const data = await res.json();
  // console.log({data});
  const villageData = data.data;
  // console.log(villageData);

  return (
    <>
      <h1><b>Villages</b></h1>
      <div className='flex flex-row flex-wrap place-content-center'>
      { 
        villageData.map((element)=>{
          return <VillageCard key={element.id}{...element}/>
        })
      }
      </div>

    </>
  )
}

export default village