'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from './ClientReviewCard';
const responsive = {
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const ClientReview = () => {
  return (
    <div id='testimonials' className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-blod text-white'>
             Kind words from satisfied <br /> {" "}
            <span className='text-gray-500'>clients</span>
        </h1>
        <div className='mt-16 w-[70%] mx-auto'>
            <Carousel
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                >
                {/* Client Review Card */}
                <ClientReviewCard 
                image="/images/c1.png"
                name="John Doe"
                role="CEO, Landscape"
                />
                <ClientReviewCard 
                image="/images/c2.png"
                name="Jane Smith"
                role="CTO, TechCorp"
                />
                <ClientReviewCard 
                image="/images/c3.png"
                name="Michael Johnson"
                role="CEO, App Netswork"
                />
                <ClientReviewCard 
                image="/images/c4.png"
                name="Emily Davis"
                role="Founder, Creatives"
                />
                <ClientReviewCard 
                image="/images/c5.png"
                name="William Brown"
                role="Manager, Solutions Ltd"
                />
            </Carousel>;

        </div>
        
    </div>
  )
}

export default ClientReview