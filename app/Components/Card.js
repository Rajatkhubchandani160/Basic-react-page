'use client'
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion"
const Card = ({data,refrence}) => {
  return (
    <>
    <motion.div drag dragConstraints={refrence} className='relative bg-zinc-300 w-[270px] p-4 h-[290px] rounded-3xl overflow-hidden'>
        <FaRegFileAlt/>
        <p className='pt-10 pr-3 font-semibold font-serif leading-[20px] text-zinc-900 capitalize'>{data.discription}</p>
        <div className='absolute bottom-12 text-black h-10 w-full flex items-center justify-between p-4 left-0'>
          <h5 className='text-[13px]'>{data.size}</h5>
          <div>{data.tag? <MdDownloadForOffline/> : <MdCancel/>}</div>
        </div> 

        <div>{data.tag ?<div className='absolute bottom-0 bg-blue-400 h-7 w-full text-center p-1 left-0 capitalize'>
          {data.tagdata}
          </div> :<div className='absolute bottom-0 bg-green-600 h-7 w-full text-center p-1 left-0 capitalize'>Successfullly Downloaded</div> }</div>
      </motion.div>
    </>
  )
}

export default Card