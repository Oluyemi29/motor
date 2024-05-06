import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import AdminMenu from '../adminMenu/page';
import { FaLink } from "react-icons/fa6";


const page = () => {
  return (
    <div className='flex flex-row justify-between md:gap-0 w-full mt-10'>
      <AdminMenu/>
      <div className='w-4/5 md:px-10 px-2 md:py-15 py-6'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div>
                    <h1 className='md:text-xl font-semibold'>Sales History</h1>
                    <p className='text-[0.8rem]'>View your recent sales and transactions</p>
                </div>
                <div>
                    <input className='md:w-40 w-full text-[0.7rem] boxed rounded-md md:mt-0 mt-5 py-2 px-2' type='text' placeholder='Search for sales'/>
                </div>
            </div>


                <div className='flex md:flex-row flex-col mt-16 justify-between items-center'>
                    <div className='flex flex-row gap-5 justify-between md:text-sm'>
                        <h1>All order</h1>
                        <h1>Summary</h1>
                        <h1>Completed</h1>
                    </div>
                    <div className='flex md:flex-row mt-5 w-full md:w-auto gap-5 justify-between md:text-[0.8rem]'>
                        <div className='flex md:flex-row md:px-4 px-3 py-1 md:py-2 boxed rounded-md items-center justify-between'>
                            <CiCalendar className='text-lightedBlue'/>
                            <p className='md:flex hidden'>Jan-10-22 - Jan-31-22</p>
                        </div>
                        <div className='flex md:flex-row px-4 py-2 rounded-md boxed items-center justify-between'>
                            <FaLink/><p>Filters</p>
                        </div>
                    </div>
                </div>

                <div className='w-full overflow-x-auto py-3 px-2'>
                    <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-5 gap-10 py-1 px-5 rounded-md bg-fadededAsh border-2 border-solid border-lightedBlue justify-between '>
                        <h1 className='w-full'>Sales Id</h1>
                        <h1 className='w-full'>Customer Email</h1>
                        <h1 className='w-full'>Price</h1>
                        <h1 className='w-full'>Quantity</h1>
                        <h1 className='w-full'>Payment Status</h1>
                        <h1 className='w-full'>Total</h1>
                    </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Aralola@23gmail.com</h1>
                            <h1 className='w-full'>$21,000</h1>
                            <h1 className='w-full'>2</h1>
                            <h1 className='w-full text-green-700'>completed</h1>
                            <h1 className='w-full'>$42,000</h1>
                        </div>
                        <div className='flex flex-row md:w-full w-max md:text-[0.7rem] font-semibold mt-4 gap-10 py-1 px-5 rounded-md bg-transparent boxed justify-between'>
                            <h1 className='w-full'>#21346</h1>
                            <h1 className='w-full'>Damilola@23gmail.com</h1>
                            <h1 className='w-full'>$20,000</h1>
                            <h1 className='w-full'>4</h1>
                            <h1 className='w-full text-red-700'>Pending</h1>
                            <h1 className='w-full'>$80,000</h1>
                        </div>
                        
                    </div>

                </div>
        </div>
  )
}

export default page
