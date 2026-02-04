'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticalBackground';
const Hero = () => {
  return (
    <div id='home' className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <ParticlesHero />
        <div className='relative z-10 flex flex-col items-center'>
         <Image 
         src="/images/profil.jpg" 
         alt="hero image" 
         width={150} 
         height={150}
         className='rounded-full border-8 border-black' 
         data-aos="fade-up"
          
          />
          <h1 data-aos="fade-up" 
          data-aos-delay="200" 
          className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-blob tracking-wide'>
           Final-year student specializing in   <br />
            <span className='text-gray-500'> Full-Stack development and DevOps engineering</span>
          </h1>
          <h2 data-aos="fade-up" 
          data-aos-delay="400" 
          className='mt-5 text-sm px-2 text-center sm:text-2xl font-mefium flex items-center'>
             Hi! I'm Aboussaad, A Passionate
             <span className='text-gray-500 font-blob'>
                <Typewriter
                  options={{
                    strings: [
                        'Full-Stack Developer.',
                        'Spring Boot Developer.',
                        'DevOps Enthusiast.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay:74,
                    deleteSpeed:50,
                    wrapperClassName: 'pl-2',
                    }}   
                />    

             </span>
          </h2>
              <Link 
               href="#works"
               data-aos="fade-up" 
               data-aos-delay="600" 
               className='mt-6 px-10 bg-gray-800 hover:bg-gray-900 transition-all duration-300
              cursor-pointer rounded-full text-lg font-medium'>
                <span>See my Work</span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
              </Link>
        </div>
    </div>
  )
}

export default Hero