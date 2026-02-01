"use client";
import React, { useState } from 'react'
import { BiEnvelope, BiMap, BiPhoneCall } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa6'
import { GrGithub } from 'react-icons/gr'
import { LiaLinkedin } from 'react-icons/lia'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');
        setStatusMessage('');

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setStatusMessage('Please fill in your name, email, and message.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                setStatus('error');
                setStatusMessage(data?.error || 'Failed to send your message.');
                return;
            }

            setStatus('success');
            setStatusMessage('Message sent successfully.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
            setStatus('error');
            setStatusMessage('Failed to send your message.');
        }
    };

  return (
    <div id='contact' className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[70%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
             {/* Text Section */}
             <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
                    Schedule a call with me to see if I can help
                </h1>
                <p className='text-gray-300 mt-6 text-base sm:text-lg'>
                    Reach out to discuss your project, ask questions, or just say hello. I'm here to help you bring your ideas to life and achieve your goals.
                </p>
                {/* Contact Info */}
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiPhoneCall className='w-9 h-9 text-cyan-400'/>
                        <p className='text-xl font-bold text-white'>
                            +212 773-080-339
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-400'/>
                        <p className='text-xl font-bold text-white'>
                            aboussaadm880@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-400'/>
                        <p className='text-xl font-bold text-white'>
                            Casablanca, Morocco
                        </p>
                    </div>
                </div>
                {/* Social Media Links */}
                <div className='flex items-center space-x-3 mt-8'>
                    <div className='w-14 h-14 bg-green-950 rounded-full flex items-center 
                            justify-center cursor-pointer flex-col hover:bg-bleu-800 
                            transition-all duration-300'>
                        <FaFacebookF className='text-white w-6 h-6' />
                    </div>
                    <div className='w-14 h-14 bg-green-950 rounded-full flex items-center 
                            justify-center cursor-pointer flex-col hover:bg-bleu-800 
                            transition-all duration-300'>
                        <LiaLinkedin className='text-white w-6 h-6' />
                    </div>
                    <div className='w-14 h-14 bg-green-950 rounded-full flex items-center 
                            justify-center cursor-pointer flex-col hover:bg-bleu-800 
                            transition-all duration-300'>
                        <GrGithub className='text-white w-6 h-6' />
                    </div>
                </div>
             </div>
             {/*form */}
                 <form 
                     onSubmit={handleSubmit}
                     data-aos="zoom-in"
                     data-aos-anchor-placement="top-center"
                     data-aos-delay="0"
                     className='md:p-10 p-5 bg-green-950 rounded-lg'>
                     <input 
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         placeholder='Name'
                         className='px-4 py-3.5 bg-[#363636] text-white outline-none rounded-md w-full placeholder:text-white/70'
                     />
                     <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder='Email Address'
                         className='px-4 py-3.5 mt-6 bg-[#363636] text-white outline-none rounded-md w-full placeholder:text-white/70'
                     />
                     <input 
                         type="text" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder='Phone Number'
                         className='px-4 py-3.5 mt-6 bg-[#363636] text-white outline-none rounded-md w-full placeholder:text-white/70'
                     />
                     <textarea 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         placeholder='Your Message'
                         className='px-4 py-3.5 mt-6 bg-[#363636] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
                     />
                     {statusMessage && (
                        <p
                          className={`mt-4 text-sm ${
                             status === 'success' ? 'text-emerald-300' : 'text-red-300'
                          }`}
                        >
                          {statusMessage}
                        </p>
                     )}
                     <button
                        type="submit"
                        disabled={status === 'loading'}
                        className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-800 transition-all duration-300 cursor-pointer text-white rounded-full disabled:opacity-60 disabled:cursor-not-allowed'
                     >
                          {status === 'loading' ? 'Sending...' : 'send message'}
                     </button>

                 </form>

        </div>
    </div>
  )
}

export default Contact