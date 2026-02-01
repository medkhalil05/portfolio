import React from 'react'
import Image from 'next/image'
type Props = {
    name: string;
    image: string;
    role: string;
}

const ClientReviewCard = ({ name, image, role }: Props) => {
  return (
    <div className='m-2'>
        <Image 
        src={image} 
        alt="client" 
        width={60} 
        height={60} 
        className='rounded-full'
        />
        <p className='mt-6 text-base text-white/80 font-medium'>
            &quot; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. &quot;
        </p>
        <h1 className='mt-6 text-xl font-blod text-gray-500'>
            {name}
        </h1>
        <h2 className='mt-1 text-white'>
            {role}
        </h2>
    </div>
  )
}

export default ClientReviewCard