'use client'
import React from 'react';
import Image from 'next/image'
import Fordys from '@/app/photo/Fordy.png'

const page = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between mt-16'>
      <div className=' w-full md:w-1/2 md:mt-36 mt-12 md:pl-10 pl-1'>
        <h1 className='text-2xl font-semibold'>We are the best of all </h1>
        <p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur. Sollicitudin a lorem mattis odio eu fermentum erat placerat. Suspendisse egestas nisi leo ut elit. Ac pharetra consequat orci at. Sed nec eu eget a malesuada lorem a dolor morbi. Vestibulum facilisis euismod egestas interdum enim ullamcorper euismod. Mus fermentum ornare eu volutpat a. Molestie orci turpis tincidunt fringilla amet in. Nunc in auctor sit sit sit in tellus enim cursus. Velit adipiscing faucibus pellentesque mus posuere. Pharetra posuere faucibus lorem pretium dui.</p>
        <p className='text-sm mt-5 '>Lorem ipsum dolor sit amet consectetur. Sollicitudin a lorem mattis odio eu fermentum erat placerat. Suspendisse egestas nisi leo ut elit. Ac pharetra consequat orci at. Sed nec eu eget a malesuada lorem a dolor </p>
      </div>
      <div className=' w-full md:w-1/2'>
        <Image 
        src={Fordys}
        width={250}
        height={250}
        className='w-full'
        alt='aaasx'
        />
      </div>
    </div>
  )
}

export default page
