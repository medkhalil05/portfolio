'use client'
import Services from './Services/Services';
import Hero from './Hero/Hero';
import Resume from './Resume/Resume';
import Projects from './Projects/projects';
import Skills from './Skills/Skills';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Contact from './Contact.tsx/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {
 
  useEffect(() => {
     const initAOS = async () => {
       await import("aos");
          AOS.init({ 
            duration: 1000,
            easing: 'ease',
            once:true,
            anchorPlacement: 'top-bottom',
          });
        };    
      initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
     {/* <ClientReview /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}

export default Home