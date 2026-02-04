'use client'
import React from 'react'
import { FaJava } from 'react-icons/fa'
import { SiAnsible, SiDocker, SiJavascript, SiJenkins, SiKubernetes, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTerraform, SiThemoviedatabase, SiTypescript , SiSqlite, SiApachecassandra} from 'react-icons/si'
import Tilt from 'react-parallax-tilt';
const skills= [
    {
        name: 'JavaScript',
        icon: <SiJavascript/>,
        pourcentage: 70,
    },
    {
        name: 'Java',
        icon: <FaJava />,
        pourcentage: 70,
    },
    {
        name: 'React Js',
        icon: <SiReact/>,
        pourcentage: 70,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        pourcentage: 70,
    },
    {
        name: 'Node.Js',
        icon: <SiNodedotjs/>,
        pourcentage: 70,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss/>,
        pourcentage: 70,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript/>,
        pourcentage: 70,
    },
    {
        name: 'Docker',
        icon: <SiDocker />,
        pourcentage: 70,
    },
    {
        name: 'Kubernetes',
        icon: <SiKubernetes/>,
        pourcentage: 60,
    }
    ,
    {
        name: 'Jenkins',
        icon: <SiJenkins />,
        pourcentage: 70,
    },
    {
        name: 'Terraform',
        icon: <SiTerraform />,
        pourcentage: 70,
    },
    {
        name: 'ANSIBLE',
        icon: <SiAnsible />,
        pourcentage: 70,
    },
    {
        name: 'Sql',
        icon: <SiSqlite />,
        pourcentage: 70,
    },
    {
        name: 'No SQL',
        icon: <SiApachecassandra />,
        pourcentage: 60,
    },    

]

const Skills = () => {
  return (
    <div id='skills' className='text-white pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            My <span className='text-gray-500'>Skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skil, i)=> {
                return (
                <Tilt key={skil.name}
                scale={1.5}
                transitionSpeed={400}>
                    <div 
                    data-aos="flip-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={i * 100}
                    className='bg-gray-800 text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-white'>
                            {skil.icon}
                        </div> 
                        <p className='text-2xl font-semiblod'>
                            {skil.pourcentage}% 
                        </p>
                        <p className='text-gray-300 mt-1'>
                            {skil.name}
                        </p>
                    </div>    
                 
                </Tilt>    
                
                );
            })}    
        </div>
        
    </div>
  );
};

export default Skills