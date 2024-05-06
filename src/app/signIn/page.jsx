'use client'
import React from 'react'
import './page.css'
// import Ford from '../../../public/images/CL 1'
import Link from 'next/link'

const page = () => {
  return (
    <div className='signIn pt-20 md:px-20 px-1'>
      <div>
        <h1 className='text-right text-customedWhite md:text-lg text-[0.7rem]'>Don’t have an account yet? <Link className='text-lightedBlue' href='/signUp'>Sign Up</Link></h1>
        <div className='text-customedWhite mt-10 text-center'>
            <h1 className='text-3xl font-semibold'>Welcome Back!</h1>
            <p className=''>Sign in to your account</p>

            <form className='w-full mt-20 pb-60'>
                <input className='border-2 border-solid border-white bg-customedWhite opacity-60 pl-3 md:w-2/3 w-5/6 h-12 md:h-10 mt-5 rounded-md text-black' type='text' placeholder='Email Address'/> <br />
                <input className='border-2 border-solid border-white bg-customedWhite opacity-60 pl-3 md:w-2/3 w-5/6 h-12 md:h-10 mt-5 rounded-md text-black' type='text' placeholder='Password'/> <br/>
                <button className='md:w-1/4 w-3/6 boxing bg-customedWhite text-lightedBlue2 rounded-md mt-10 h-10'>Sign In</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default page
