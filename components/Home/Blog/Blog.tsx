import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div id='blog' className='pt-16 pb-16'>
       <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-blod text-white'>
             My Latest {" "}
            <span className='text-gray-500'>Blogs</span>
        </h1>  
        <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
            {/*blog card*/}
            <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="0">
            <BlogCard 
                image='/images/b1.jpg'
                title='Learn How to build an amizing portfolio website using Next.js'
            />
            </div>
            <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100">
             <BlogCard 
                image='/images/b2.jpg'
                title=' Learn How to build an amizing Blog website using React.js'
            />
            </div>
            <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200">
             <BlogCard 
                image='/images/b3.jpg'
                title='Learn How to build an amizing Social Media Website using React js'
            />
            </div>
        </div>
        
    </div>
  )
}

export default Blog