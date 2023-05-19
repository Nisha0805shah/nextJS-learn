import React from 'react'
import Link from 'next/link'
import VillageCard from '../components/VillageCard';

const village = async () => {
  const url = `${process.env.URL}/api/cities`;
  const token = process.env.AUTH_TOKEN;
  console.log({token});

  const options = {
    method: 'GET',
  }
  const res = await fetch(url, options, { headers: {Authentication : `Bearer ${token}`}});
  const data = await res.json();
  console.log({data});
  // const villageData = data.data;

  return (
    <>
      <h1><b>Villages</b></h1>
      {/* <div className='flex flex-row flex-wrap place-content-center'>
      { 
        villageData.map((element)=>{
          return <VillageCard key={element.id}{...element}/>
        })
      }
      </div> */}

    </>
  )
}

export default village