import React from 'react'
import { BsCart4 } from "react-icons/bs";

import Logo from './img/logo.png'
import Avatar from './img/avatar.png'

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* Desktop and tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-center'></div>
            <div className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt='logo' />
                <p className='text-headingColor text-xl font-bold'>City</p>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
                </ul>

                <div className='relative flex items-center justify-center'>
                    <BsCart4 className='text-textColor text-2xl cursor-pointer' />
                    <div className='absolute -top-4 -right-4 w-5 h-5 rounded-full bg-cartBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <img src={Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' alt='userprofile' />

            </div>



            {/* Mobile */}
            <div className='flex md:hidden w-full h-full'></div>
        </header>
    )
}

export default Header