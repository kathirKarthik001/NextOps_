import React from 'react'

const UpdateTopic
 = () => {
  return (
    <div>
        <form className='flex flex-col gap-5 ' action="">
            <input 
            className='pl-5  py-3 border-[2px] border-gray-100 '
            type="text" 
            name="topic" 
            placeholder='Enter the Topic'
            id="" />

            <input 
            className='pl-5 py-3 border-[2px] border-gray-100 '
            type="text" 
            name="topic" 
            placeholder='Enter the description'
            id="" />
        
            <button className='bg-black text-white font-semibold w-fit px-6 py-3'>
                Update Topic
            </button>


        </form>
    </div>
  )
}

export default UpdateTopic
