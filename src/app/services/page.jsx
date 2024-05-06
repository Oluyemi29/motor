import React from 'react'
import './page.css'
import Rectangle1 from '@/app/photo/Rectangle 122.png'
import Rectangle2 from '@/app/photo/Rectangle 124.png'
import pair1 from '@/app/photo/Rectangle 125.png'
import pair2 from '@/app/photo/Rectangle 126.png'
import pair3 from '@/app/photo/Rectangle 127.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='Headings text-customedWhite mt-10 md:pt-40 pt-20 pb-20 md:pb-40 px-2 md:px-10'>
        <h1 className='text-[1.5rem] md:text-[2.5rem] font-bold'>2021 Mercedes-AMG <br/>GLE53 Coupe electrifies</h1>
        <p className='text-[0.7rem] md:text-sm mt-6'>Its electric motor can provide up to 184 pound-feet of <br/> torque on demand.</p>
        <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite mt-10">Buy Now</button>
      </div>
      

      <div className='px-1 md:px-10 mt-1 mb-10'>
        
        <div>
            <div className='flex flex-col md:flex-row'>
                    <Image 
                    src={Rectangle2}
                    alt='1111'
                    width={250}
                    height={250}
                    className='w-full'
                    />
                <div className='w-full bg-lightedBlue md:pb-0 pb-5 bg-opacity-30'>
                    <h1 className='text-black md:px-10 px-1 py-5 md:py-10 text-[1rem] md:text-[2rem] font-bold'>One’s choice of ride <br/> is one’s story </h1>
                    <p className='text-[0.7rem] px-1 md:px-10 md:text-sm'>Lorem ipsum dolor sit amet consectetur. Vitae phasellus leo semper risus eu mauris aliquet arcu dictumst. Blandit ultrices in tristique id curabitur at congue id ultrices. Dolor ridiculus non suspendisse amet gravida faucibus.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row '>
                <div className='w-full bg-lightedBlue md:pb-0 pb-5 bg-opacity-30'>
                <h1 className='text-black px-10 py-10 text-[1rem] md:text-[2rem] font-bold'>One’s choice of ride <br/> is one’s story </h1>
                    <p className='text-[0.7rem] px-10 md:text-sm'>Lorem ipsum dolor sit amet consectetur. Vitae phasellus leo semper risus eu mauris aliquet arcu dictumst. Blandit ultrices in tristique id curabitur at congue id ultrices. Dolor ridiculus non suspendisse amet gravida faucibus.</p>
                </div>
                    <Image 
                    src={Rectangle1}
                    alt='1111'
                    width={250}
                    height={250}
                    className='w-full'
                    />
            </div>


            <div className='mt-5 md:mt-12 grid grid-cols-1  md:grid-cols-3'>
                <div className='grid grid-cols-2 md:gap-0 col-span-2'>
                    <Image 
                    src={pair1}
                    alt='1232'
                    width={250}
                    height={250}
                    className='w-full'
                    />
                    <Image 
                    src={pair2}
                    alt='1232'
                    width={250}
                    height={250}
                    className='w-full'
                    />
                    <Image 
                    src={pair3}
                    alt='1232'
                    width={250}
                    height={250}
                    className='w-full'
                    />
                    <div className='md:px-10 px-2 py-1 md:py-10'>
                        <h1 className='md:text-[2rem] text-[1rem] font-bold'>One’s choice of <br/> ride is one’s story </h1>
                        <p className='md:text-sm mt-2 md:mt-10 text-[0.7rem]'>Lorem ipsum dolor sit amet consectetur. Molestie nunc sollicitudin eu volutpat accumsan eget tempor pellentesque. Diam m eu volutpat at massa libero ultricies.</p>
                    </div>
                </div>

                <div className='md:px-10 px-1 md:block justify-between flex flex-row py-5 md:py-10'>
                    <div className=''>
                        <h1 className='md:text-[2rem] text-[1rem] font-bold'>One’s choice of <br/> ride is one’s story </h1>
                        <p className='md:text-sm mt-10 text-[0.7rem]'>Lorem ipsum dolor sit amet consectetur. Molestie nunc sollicitudin eu volutpat accumsan eget tempor pellentesque. Diam m eu volutpat at massa libero ultricies.</p>
                    </div>
                    <div className='md:mt-10'>
                        <h1 className='md:text-[2rem] text-[1rem] font-bold'>One’s choice of <br/> ride is one’s story </h1>
                        <p className='md:text-sm mt-10 text-[0.7rem]'>Lorem ipsum dolor sit amet consectetur. Molestie nunc sollicitudin eu volutpat accumsan eget tempor pellentesque. Diam m eu volutpat at massa libero ultricies.</p>
                        <button className='text-[0.7rem] mt-10 bg-lightedBlue rounded-md text-customedWhite px-7 py-2 md:text-sm'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
