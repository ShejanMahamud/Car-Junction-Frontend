import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#151515] px-20 py-10 flex items-center gap-10 justify-center'>
      <div className='flex flex-col items-start gap-3'>
      <div className='flex flex-col items-center gap-1 cursor-pointer'>
    <img src="https://gist.githubusercontent.com/ShejanMahamud/1c23eecd3d7e9f03e3fc65d8b145b744/raw/655b752f8550a19466b5912360c4cd4d97ec12fd/logo.svg" alt="logo.png" className='lg:w-20 md:w-10 w-8'/>
    <span className='font-bold text-white text-lg'>Car Junction
    </span>
    </div>
    <p className='text-white w-[50%]'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.</p>
    <div className='flex items-center gap-3'>
      <div className='bg-white bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center text-white'>
      <FaGoogle/>
      </div>
      <div className='bg-white bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center text-white'>
      <FaTwitter/>
      </div>
      <div className='bg-white bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center text-white'>
      <FaInstagram/>
      </div>
      <div className='bg-white bg-opacity-10 h-10 w-10 rounded-full flex items-center justify-center text-white'>
      <FaLinkedin/>
      </div>
    </div>
      </div>
      <div className='flex w-full items-start gap-48'>
        <ul className='text-white'>
          <li className='mb-8 font-semibold text-lg'>About</li>
          <li className='mb-3'>Home</li>
          <li className='mb-3'>Service</li>
          <li className='mb-3'>Contact</li>
        </ul>
        <ul className='text-white'>
          <li className='mb-8 font-semibold text-lg'>Company</li>
          <li className='mb-3'>Why Car Doctor?</li>
          <li className='mb-3'>About</li>
        </ul>
        <ul className='text-white'>
          <li className='mb-8 font-semibold text-lg'>Support</li>
          <li className='mb-3'>Support Center</li>
          <li className='mb-3'>Feedback</li>
          <li className='mb-3'>Accesbility</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer