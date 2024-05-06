'use client'
import React from 'react'
import './page.css'
import Link from 'next/link'

const page = () => {
  return (
    <div className='signIn pb-20 pt-24 md:px-20 px-1'>

    

        <h1 className='text-center text-[1.5rem] mb-3 text-customedWhite'>Contact Us</h1>
        <div className='w-4/5 m-auto bg-customedWhite rounded-md opacity-60 md:px-32 md:py-5 px-5 py-3'>
            <form className='w-full pb-3'>
                <input type='text' placeholder='Name' className='border-b-2 md:mt-8 mt-5 h-10 w-full border-solid border-black pl-3'/>
                <input type='email' placeholder='Email' className='border-b-2 md:mt-10 mt-5 h-10 w-full border-solid border-black pl-3'/>
                <textarea placeholder='Type your message here' className='w-full h-28 md:h-52 border-2 md:mt-14 mt-5 rounded-md border-solid border-black pl-3 pt-3'/>
                <button className='bg-lightedBlue rounded-md text-customedWhite w-full h-12 mt-10 opacity-100'>Contact Us</button>
            </form>
        </div>
      
    </div>
  )
}

export default page
