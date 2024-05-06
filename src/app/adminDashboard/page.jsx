import React from 'react'
import { FaCamera } from "react-icons/fa";
import AdminMenu from '../adminMenu/page';

const page = () => {
  return (
    <div className='flex flex-row justify-between md:gap-0 w-full mt-10'>
      <AdminMenu/>
      <div className='w-4/5 md:px-10 px-5 md:py-24 py-16'>
            <form>
                <label className=''>
                    <div className='border-2 border-solid border-lightedBlue w-full pt-10 pb-7 text-center rounded-md'>
                        <h1 className='text-[0.7rem] relative z-50 font-semibold'>Add Image</h1>
                    <FaCamera className='text-slate-400 text-[2.5rem] -mt-8  m-auto relative z-0'/>
                    <input type='file' className='hidden' />
                    </div>
                </label>

                <h1 className='md:text-xl text-[1.2rem] my-5 font-semibold '>Image Properties</h1>

                <div className='flex md:flex-row flex-col justify-between gap-5 md:gap-10 w-full'>
                    <input type='text' className='pl-5 text-black border-2 border-solid border-lightedBlue rounded-md w-full h-12' placeholder='Brand Name' />
                    <input type='number' className='pl-5 text-black border-2 border-solid border-lightedBlue rounded-md w-full h-12' placeholder='Price' />
                    <input type='text' className='pl-5 text-black border-2 border-solid border-lightedBlue rounded-md w-full h-12' placeholder='Model' />
                </div>
                <div className='flex md:flex-row flex-col gap-5 md:gap-10 w-full mt-5 md:mt-10'>
                    <input type='text' className='pl-5 text-black border-2 border-solid border-lightedBlue rounded-md w-full md:w-3/5 h-12' placeholder='Model' />
                    <button className='w-full h-12 md:w-2/5 text-customedWhite bg-lightedBlue rounded-md'>Post</button>
                </div>
            </form>
        </div>
      </div>
  )
}

export default page
