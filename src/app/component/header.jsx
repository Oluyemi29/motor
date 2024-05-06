'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";



const Header = () => {
  const[menu, setMenu] = useState(false)

  const handleShowMenu = ()=>{
    setMenu(true)
  }
  const handleSHideMenu = ()=>{
    setMenu(false)
  }
  return (
    <div className='z-100 fixed top-0 w-full'>
      <div className="text-customedWhite bg-deepedBlue w-full flex flex-row justify-between items-center px-1 md:px-10 py-2">
        <h1 className="text-3xl font-bold w-1/5">LOGO</h1>
        <div className="md:flex hidden flex-row w-2/5 justify-between gap-10">
          <h1 className="text-sm">About</h1>
          <h1 className="text-sm">Services</h1>
          <h1 className="text-sm">Contact Us</h1>
        </div>
        <div className="w-1/5 md:flex hidden flex-row gap-3">
          <button className="px-4 py-2 text-sm rounded-md border-2 border-solid border-customedWhite">Sign Out</button>
          <button className="px-4 bg-lightedBlue border-2 border-solid border-lightedBlue py-2 text-sm rounded-md">Sign In</button>
        </div>
        {menu?  <HiMiniXMark className='text-3xl md:hidden' onClick={handleSHideMenu}/>:<IoMdMenu className='text-3xl md:hidden' onClick={handleShowMenu}/> } 
      </div>
    </div>
  )
}

export default Header
