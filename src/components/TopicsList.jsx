import React from 'react'
import {HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'
import RemovBtn from './RemovBtn'

const TopicsList = () => {
  return (
    <div className='border  border-gray-200 shadow-sm mb-4 p-5 flex justify-between items-start'>

        <div className="">
            <div className="font-semibold text-2xl mb-3"> Topic </div>
            <div className=""> Topic Description </div>
        </div>
        
        <div className="flex items-center gap-3">
            <Link href={'/updateTopic/1234'} className="bg-blue-800 rounded-sm text-white px-3 py-1">
                <HiPencilAlt size={24}/>
            </Link>
            <RemovBtn/>
        </div>


    </div>
  )
}

export default TopicsList