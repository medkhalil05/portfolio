"use client";
import React, { useEffect, useState } from 'react'
import {FaCode} from 'react-icons/fa'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: ()=>void;
}

const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/aboussaad_PFE.pdf'; 
    link.download = 'CV-ABOUSSAAD.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handler = () => {
        if (window.scrollY >= 90) setNavBg(true);
        if (window.scrollY < 90) setNavBg(false);}
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);    

  }, []);

  return (
    <div
    className={`transition-all ${
        navBg ? 'bg-transparent] shadow-md' : 'fixed'} 
        duration-200 h-[12vh] z-[10000] fixed w-full`}
        >
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-blob'>
                    ABOUSSAAD
                </h1>    
            </div>
            {/* navLinks */}    
            <div className='hidden lg:flex items-center space-x-10'>
                {NavLinks.map((link) => {
                    return <Link key={link.id} href={link.url} className='text-base hover:text-gray-800 text-white font-medium transition-all duration-200'>
                        <p>{link.Label}</p>
                    </Link>
                })} 
            </div>
            {/* button */}
            <div className='flex items-center space-x-4'>
                {/*cv button*/}
                <button onClick={handleDownloadCV} className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-green-800 hover:bg-green-900 transition-all duration-300 text-white flex items-center space-x-2'>
                    <BiDownload className='w-5 h-5' />
                    <span>Download CV</span>
    
                </button>
                {/*Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />    
            </div>       

        </div>
    </div>
  )
}

export default Nav