import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
}

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
        <Image 
            src={image}
            alt="blog"
            width={500}
            height={500}
            className='object-cover'
        />
        <p className='mt-4 text-gray-400 font-medium text-base sm:text-lg'>
             10 November 2025
        </p>
        <h1 className='mt-5 text-lg sm:text-xl font-blod text-white hover:underline Hover:text-cayan-300 cursor-pointer transition-all duration-300'>
            {title}
        </h1>
        <div className='mt-4 flex gap-2 items-center'>
            <p className='px-4 py-1.5 bg-green-950 text-white text-sm sm:text-base font-blod rounded-full'>
                React Js
            </p>
            <p className='px-4 py-1.5 bg-green-950 text-white text-sm sm:text-base font-blod rounded-full'>
                Next Js
            </p>
            <p className='px-4 py-1.5 bg-green-950 text-white text-sm sm:text-base font-blod rounded-full'>
                Tailwind
            </p>
        </div>

    </div>
  )
}

export default BlogCard