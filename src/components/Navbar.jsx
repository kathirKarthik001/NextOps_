import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className='mb-7'>
        <div className="bg-gray-400 h-16 flex items-center justify-between px-7">

            <Link  href={'/'}  className="font-bold  text-2xl">NextOps_</Link>

            <Link href={'/addTopic'} className="font-semibold bg-black px-4 py-2 rounded-sm text-white w-fit ">
                Add
            </Link>
        </div>
    </div>
  )
}

export default Navbar