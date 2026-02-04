import React from 'react'
import Image from 'next/image'

const projects = () => {
  return (
    <div id='works' className='pt-16 pb-16'>
       <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-blod text-white'>
        A small selection of recent <br /> {" "}
         <span className='text-gray-500'>projects</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        {/*project 1*/}
        <div
         data-aos="fade-up"
         data-aos-anchor-placement="top-center"
         data-aos-delay="0"
        >
            <Image 
            src='/images/p1.jpg' 
            alt='img'
            width={800} 
            height={650} 
            className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semiblod text-white'>
                Library Management System (Stage PFE Al-Jisr)
            </h1> 
            <h1 className='mt-2 font-medium text-white/80'>
                   Web App , JEE 
            </h1>
        </div>
         {/*project 2*/}
        <div
         data-aos="fade-up"
         data-aos-anchor-placement="top-center"
         data-aos-delay="100"
        >
            <Image 
            src='/images/p2.jpg' 
            alt='img'
            width={800} 
            height={650} 
            className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semiblod text-white'>
                Bubber Dinner Website 
            </h1> 
            <h1 className='mt-2 font-medium text-white/80'>
                    Microservices, DDD & DevOps CI/CD
            </h1>
        </div>
         {/*project 3*/}
        <div
         data-aos="fade-up"
         data-aos-anchor-placement="top-center"
         data-aos-delay="200"
        >
            <Image 
            src='/images/p3.jpg' 
            alt='img'
            width={800} 
            height={650} 
            className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semiblod text-white'>
                University Residence Management Application
            </h1> 
            <h1 className='mt-2 font-medium text-white/80'>
                  Web  , Spring Boot & React
            </h1>
        </div>
         {/*project 4*/}
        <div 
         data-aos="fade-up"
         data-aos-anchor-placement="top-center"
         data-aos-delay="300"
        >
            <Image 
            src='/images/p4.jpg' 
            alt='img'
            width={800} 
            height={650} 
            className='rounded-lg' />
            <h1 className='mt-4 text-xl sm:text-2xl font-semiblod text-white'>
                Python Automation App
            </h1> 
            <h1 className='mt-2 font-medium text-white/80'>
                Jenkins, Docker, Kubernetes, Ansible, Terraform , AZURE cloud
            </h1>
        </div>
      </div>
    </div>
  )
}

export default projects