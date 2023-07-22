import React from 'react'
import { FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { IoBagRemove } from 'react-icons/io5';

export const Home = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-full flex justify-around text-center p-10 gap-20'>
        <div className='bg-white w-1/2 flex flex-row p-3 items-center gap-4'>
          <div className='text-2xl text-white bg-green-500 rounded-full p-2 shadow-md shadow-green-500'>
            <FaShoppingCart />
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-slate-300'>Total Order</span>
            <span className='font-bold text-xl'>1000</span>
          </div>
        </div>
        <div className='bg-white w-1/2 flex flex-row p-3 items-center gap-4'>
          <div className='text-2xl text-white bg-orange-400 rounded-full p-2 shadow-md shadow-orange-400'>
            <FaRupeeSign />
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-slate-300'>Total Sales</span>
            <span className='font-bold text-xl'>&#8377; 1000000</span>
          </div>
        </div>
        <div className='bg-white w-1/2 flex flex-row p-3 items-center gap-4'>
          <div className='text-2xl text-white bg-blue-500 rounded-full p-2 shadow-md shadow-blue-500'>
            <IoBagRemove />
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-slate-300'>Total Products</span>
            <span className='font-bold text-xl'>30</span>
          </div>
        </div>
      </div>
    </div>
  )
}
