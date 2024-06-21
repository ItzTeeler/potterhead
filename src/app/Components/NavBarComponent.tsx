import React from 'react'
import Image from 'next/image'
import harryLogo from '@/app/Assets/Harry-potter-Logo.png'
const NavBarComponent = (props: { searchValue: any, onSearchChange: any }) => {
  return (
    <div className='fixed w-full flex justify-between px-10 items-center navBg backdrop-blur-md'>
     <Image src={harryLogo} alt="Logo" className='w-[150px] h-[90px]' />
    <input 
        className='h-[40px] w-[350px] border rounded-[10px] p-5' 
        type="text" 
        value={props.searchValue}
        onChange={props.onSearchChange}
        placeholder="Search for a character..."
      />
    </div>
  )
}

export default NavBarComponent
