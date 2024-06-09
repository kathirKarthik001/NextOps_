import React from 'react'
import { HiOutlineTrash} from 'react-icons/hi'

const RemovBtn = () => {
  return (
    <div className="bg-red-600 rounded-sm text-white px-3 py-1">
        <HiOutlineTrash size={24}/>
    </div>
  )
}

export default RemovBtn