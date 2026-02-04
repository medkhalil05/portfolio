import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
     
    
      <div id='services' className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Designing and deploying reliable {" "} <br /> Full-Stack applications
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
            {/* Service Card */}
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServiceCard 
                icon="/images/dev.png"
                 name = "Full-Stack Web Development" 
                  description = "Building complete web applications from front-end to back-end with clean, scalable, and maintainable code."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServiceCard 
                icon="/images/i.png"
                 name = "Back-End & API (Spring Boot)" 
                  description = "Designing secure and efficient REST APIs, handling business logic, authentication, and database integration."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ServiceCard 
                icon="/images/devops.png"
                 name = "DevOps & Deployment" 
                  description = "Containerizing applications with Docker, setting up CI/CD pipelines, and deploying scalable solutions."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <ServiceCard 
                icon="/images/arch.png"
                 name = "System Design & Architecture" 
                  description = "Designing modular and scalable system architectures following software engineering best practices."
                />
            </div>

        </div>
      </div>
  )
}

export default Services