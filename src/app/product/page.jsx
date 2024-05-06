import React from 'react'
import './page.css'
import Ferrari1 from '@/app/photo/Ferrari 458 Italia (1) 1.png'
import Ferrari2 from '@/app/photo/Ferrari 458 Italia (1) 1 (1).png'
import Ferrari3 from '@/app/photo/Ferrari 458 Italia (1) 1 (2).png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='Heading mt-10 md:pt-36 pt-20 pb-20 md:pb-36 px-2 md:px-10 text-customedWhite'>
        <h1 className='text-[1.5rem] md:text-[2.5rem] font-bold'>One’s choice of ride <br/> is one’s story </h1>
        <p className='text-[0.7rem] md:text-sm mt-6'>Lorem ipsum dolor sit amet consectetur. A congue <br/> imperdiet pharetra purus ut tellus ac eu morbi. Nullam.</p>
        <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite mt-10">Buy Now</button>
      </div>
      
      <div className='text-center pt-10 pb-7'>
        <hr className='border-1  border-solid relative -z-20 border-deepedBlue' />
        <h1 className='text-lg -mt-4 bg-customedWhite px-4 -z-10 relative m-auto w-max text-deepedBlue font-semibold'>New Arrivals</h1>
      </div>

      <div className='w-full md:px-10 px-2 py-5 grid grid-cols-1 md:grid-cols-4  gap-12'>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
      </div>


        <div className='text-center pt-10 pb-7'>
            <hr className='border-1  border-solid relative -z-20 border-deepedBlue' />
            <h1 className='text-lg -mt-4 bg-customedWhite px-4 -z-10 relative m-auto w-max text-deepedBlue font-semibold'>Mercedes Benz</h1>
        </div>

        <div className='w-full md:px-10 px-2 py-5 grid grid-cols-1 md:grid-cols-4  gap-12'>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
      </div>

      <div className='text-center pt-10 pb-7'>
        <hr className='border-1  border-solid relative -z-20 border-deepedBlue' />
        <h1 className='text-lg -mt-4 bg-customedWhite px-4 -z-10 relative m-auto w-max text-deepedBlue font-semibold'>Range Rover</h1>
      </div>


      
      <div className='w-full md:px-10 px-2 py-5 grid grid-cols-1 md:grid-cols-4  gap-12'>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari1}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari2}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='w-full'>
            <Image
            src={Ferrari3}
            alt='111'
            width={250}
            height={250}
            className='w-full rounded-tl-md rounded-tr-md'
            />
            <div className='p-5 bg-fadedTransparent rounded-br-md rounded-bl-md border-r-2 border-b-2 border-solid border-slate-300'>
                <h1 className='text-sm font-semibold'>Range Rover Model23</h1>
                <p className='text-[0.7rem] mt-4'>Lorem ipsum dolor sit amet consectetur</p>
                <div className='flex flex-row mt-9 justify-between items-center'>
                    <h1 className='text-lightedBlue text-sm font-bold'>$30,000</h1>
                    <button className="text-[0.7rem] bg-lightedBlue px-4 py-2 rounded-md text-customedWhite border-r-2 border-b-2 border-solid border-slate-300">Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
