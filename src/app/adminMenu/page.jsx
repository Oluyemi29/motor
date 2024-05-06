import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

const AdminMenu = () => {
  return (
            <div className='w-1/5 bg-lightedBlue rounded-tr-md rounded-br-md pb-28 pt-28 text-customedWhite'>
                <div className='flex flex-row ml-6 md:ml-10 md:mt-10 md:mb-10 mt-12 mb-12'> <IoMdHome className='mr-5' /> <h1 className='md:flex text-sm hidden'>Home</h1></div>
                <div className='flex flex-row ml-6 md:ml-10 md:mt-10 md:mb-10 mt-12 mb-12'> <FiPlus className='mr-5' /> <h1 className='md:flex text-sm hidden'>Add new item</h1></div>
                <div className='flex flex-row ml-6 md:ml-10 md:mt-10 md:mb-10 mt-12 mb-12'> <MdOutlineRoundaboutLeft className='mr-5' /> <h1 className='md:flex text-sm hidden'>About</h1></div>
                <div className='flex flex-row ml-6 md:ml-10 md:mt-10 md:mb-10 mt-12 mb-12'> <FaUsers className='mr-5' /> <h1 className='md:flex text-sm hidden'>Services</h1></div>
                <div className='flex flex-row ml-6 md:ml-10 md:mt-10 md:mb-10 mt-12 mb-12'> <FaHistory className='mr-5' /> <h1 className='md:flex text-sm hidden'>History</h1></div>
            </div>
  )
}

export default AdminMenu
