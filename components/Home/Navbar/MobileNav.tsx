import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: ()=>void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <div>
      {/* overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black 
      opacity-90 w-full h-full h-screen`}>
        {/* NavLinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
        duration-500 delay-300 w-[80%] sm-w[60%] bg-black space-y-6 z-[100050] right-0`}>
            {/*links*/}
            {NavLinks.map((link) => {
                return <Link key={link.id} href={link.url}>
                    <p className='text-white w-fit text-xl ml-12 border-b-{1.5px} pb-1 border-white sm:text-{30px}'>
                        {link.Label}
                    </p>    
                </Link>
            })}
             {/* cros icon */}
          <CgClose
            onClick={closeNav}
            className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6"
          />
        </div> 
            
      </div>

      
    </div>
  )
}

export default MobileNav