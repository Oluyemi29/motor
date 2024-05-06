import React from 'react'
import Facebook from '../../../public/images/facebook.png'
import Instagram from '../../../public/images/instagram.png'
import X from '../../../public/images/X.png'
import Youtube from '../../../public/images/Youtube.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-deepedBlue text-customedWhite md:px-10 px-1 py-5 md:py-20'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      <div className='flex flex-row w-full gap-10 md:w-3/4 mt-3 justify-between'>
        <div>
            <p className='md:text-sm text-[0.7rem]'>Lorem ipsum dolor sit amet consectetur. <br /> A congue imperdiet pharetra purus ut <br /> tellus ac eu morbi. Nullam.</p>
        </div>
        <div className='flex flex-row w-full gap-10 md:w-1/4 md:justify-between'>
            <div className='md:text-sm text-[0.7rem]'>
                <h1>About</h1>
                <h1>Services</h1>
                <h1>Contact Us</h1>
            </div>
            <div className='md:text-sm text-[0.7rem]'>
                <h1>Help</h1>
                <h1>FAQs</h1>
            </div>
        </div>
      </div>
      <div className='w-3/4 flex mt-7 flex-col md:flex-row justify-between'>
        <div className='flex flex-row md:m-0 m-auto md:gap-3 gap-5'>
            <Link href='https://facebook.com'>
                <Image
                alt='123456' 
                src={Facebook}
                width={250}
                height={250}
                className='w-5 h-5'
                />
            </Link>
            <Link href='https://instagram.com'>
                <Image
                alt='123456' 
                src={Instagram}
                width={250}
                height={250}
                className='w-5 h-5'
                />
            </Link>
            <Link href='https://x.com'>
                <Image
                alt='123456' 
                src={X}
                width={250}
                height={250}
                className='w-5 h-5'
                />
            </Link>
            <Link href='https://youtube.com'>
                <Image
                alt='123456' 
                src={Youtube}
                width={250}
                height={250}
                className='w-5 h-5'
                />
            </Link>

        </div>
        <h1 className='md:text-sm text-[0.7rem] md:m-0 m-auto md:mt-0 mt-5'>Terms and condition | Privacy Policy</h1>
      </div>
    </div>
  )
}

export default Footer
