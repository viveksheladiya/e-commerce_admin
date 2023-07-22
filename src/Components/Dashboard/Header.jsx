import React from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { IoNotifications } from 'react-icons/io5'
import { ImSearch } from 'react-icons/im'

export const Header = () => {
  return (
    <div className='w-full h-16 bg-white border-b border-black'>
      <div className='flex justify-between px-10'>
        <div className='flex justify-center items-center gap-2'>
          <ImSearch className='text-slate-400' />
          <input type="text" placeholder='Search' className='w-[500px] p-3 outline-none' />
        </div>
        <div className='flex justify-center items-center gap-4'>
          <div className='text-3xl'>
            <MdOutlineLightMode />
          </div>
          <div className='text-3xl'>
            <IoNotifications />
          </div>
          <div className='text-3xl'>
            Profile
          </div>
        </div>
      </div>
    </div>
  )
}
