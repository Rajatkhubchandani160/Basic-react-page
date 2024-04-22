'use client'
import React, { useRef, useState } from 'react'
import Background from './Components/Background'

import Card from './Components/Card';
const page = () => {
  const ref =useRef(null)
  let data=[{
    discription:"The Devien AI is the future It' time to evolve.",
    size:"0.4mb",
    tagdata:"download Now",
    tag:true,
  },
  {
    discription:"Hello from icfai university jaipur Time to say goodbye",
    size:"0.5mb",
    tagdata:"download Now",
    tag:false,
  },
]
  return (
    <>
     <div ref={ref} className=' p-3 relative bg-zinc-800 w-full h-screen'>
    <Background/>
    <div className='bg-green-800 text-white flex  flex-wrap p-3 gap-2 items-center'>
    {data.map((i)=>(
       <Card data={i} refrence={ref}/>
    ))}
    </div>
    </div>
    </>
  )
}

export default page