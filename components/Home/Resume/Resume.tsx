import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa6'
import { BsDatabase } from 'react-icons/bs'
import { FaUserGraduate , FaJava } from 'react-icons/fa'
import { RiShieldCheckFill } from 'react-icons/ri'
const Resume = () => {
  return (
    <div id='resume' className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/*work part*/}
            <div>
                <h1 className='text-3xl sm:text-4xl font-blod text-white'>
                    My Work <span className='text-gray-500'>Experience</span>
                </h1>
                <div className='mt-10'
                data-aos="zoom-in" 
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                >
                   <ResumeCard 
                       Icon={FaCodepen}
                       role={'Full-Stack Developer'}
                   />
                   <ResumeCard 
                       Icon={FaReact}
                       role={'Front-End Developer'}
                   />
                   <ResumeCard 
                       Icon={BsDatabase}
                       role={'Backend Developer'}
                   />
                </div>
            </div> 
            {/*education part*/}
            <div>
                <h1 className='text-3xl sm:text-4xl font-blod text-white'>
                    My <span className='text-gray-500'>Education</span>
                </h1>
                <div className='mt-10' data-aos="zoom-in" 
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                >
                   <ResumeCard 
                       Icon={FaUserGraduate}
                       role={'Master Degree in Data Science & Big Data'}
                       date='2024 - 2026'
                   />
                   <ResumeCard 
                       Icon={FaUserGraduate}
                       role={'Bachelor Degree in Computer Science'}
                       date='2020 - 2024'
                   />
                   <ResumeCard 
                       Icon={FaJava}
                       role={'Oracle Certified Professional : Java SE 17 Developer'}
                       date='2025'
                   />
                   <ResumeCard 
                       Icon={RiShieldCheckFill}
                       role={'Oracle Cloud Infrastructure 2025 DevOps Professional'}
                       date='2025' 
                   />
                </div>
            </div>       
        </div>
    </div>
  )
}

export default Resume