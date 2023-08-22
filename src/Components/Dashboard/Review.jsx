import React from 'react'
import profile from '../img/logo.png'
import { AiFillStar } from 'react-icons/ai';

export const Review = () => {
    return (
        <div className='w-full'>
            <div className='container py-10'>
                <div className='mb-4'>
                    <span className='font-bold text-3xl'>All Reviews</span>
                </div>
                <div className='mb-4'>
                    {/* No reviews yet. Be the first to review this product! */}
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='bg-white p-10 rounded-lg'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='ml-10'>
                                    <img src={profile} alt="profileimage" className='w-22 h-10' />
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xl font-semibold'>Vivek Sheladiya</span>
                                </div>
                                <div className='mt-2'>
                                    <AiFillStar className='text-xl text-orange-300' />
                                </div>
                                <div className='text-center mt-2'>
                                    <span>
                                        This product is really good in quality but need improvement in quality.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-10 rounded-lg'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='ml-10'>
                                    <img src={profile} alt="profileimage" className='w-22 h-10' />
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xl font-semibold'>Dhruv Shihora</span>
                                </div>
                                <div className='mt-2'>
                                    <AiFillStar className='text-xl text-orange-300' />
                                </div>
                                <div className='text-center mt-2'>
                                    <span>
                                        This product is really good in quality but need improvement in quality.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-10 rounded-lg'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='ml-10'>
                                    <img src={profile} alt="profileimage" className='w-22 h-10' />
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xl font-semibold'>Jemish Virani</span>
                                </div>
                                <div className='mt-2'>
                                    <AiFillStar className='text-xl text-orange-300' />
                                </div>
                                <div className='text-center mt-2'>
                                    <span>
                                        This product is really good in quality but need improvement in quality.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-10 rounded-lg'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='ml-10'>
                                    <img src={profile} alt="profileimage" className='w-22 h-10' />
                                </div>
                                <div className='mt-2'>
                                    <span className='text-xl font-semibold'>Harshad Shiroya</span>
                                </div>
                                <div className='mt-2'>
                                    <AiFillStar className='text-xl text-orange-300' />
                                </div>
                                <div className='text-center mt-2'>
                                    <span>
                                        This product is really good in quality but need improvement in quality.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}