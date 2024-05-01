import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  return (
<div className='w-[90%] mx-auto my-10 h-[500px]'>
<div className="carousel w-full rounded-lg h-full">
<div id="slide1" className="carousel-item relative w-full bg-banner-4 bg-no-repeat bg-cover bg-center">
    <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Affordable Price For Car Servicing
    </h1>
    <p className='text-white leading-[30px]'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">

      <a href="#slide4" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide2" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full bg-banner-3 bg-no-repeat bg-cover bg-center">
  <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Expert Car Care at Budget-Friendly Rates
    </h1>
    <p className='text-white leading-[30px]'>Discover our expert car care services tailored to fit your budget, ensuring top-notch maintenance without breaking the bank.</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">
      <a href="#slide1" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide3" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full bg-banner-2 bg-no-repeat bg-cover bg-center">
  <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Quality Car Servicing Without the High Price
    </h1>
    <p className='text-white leading-[30px]'>Experience top-quality car servicing that doesn't come with a hefty price tag. Trust us to keep your vehicle in prime condition without emptying your wallet.</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">
      <a href="#slide2" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide4" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full bg-banner-1 bg-no-repeat bg-cover bg-center">
  <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Budget-Friendly Car Maintenance You Can Rely On
    </h1>
    <p className='text-white leading-[30px]'>Count on our budget-friendly car maintenance solutions to keep your vehicle in peak performance. With us, quality service meets affordability.</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">
      <a href="#slide3" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide5" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full bg-banner-5 bg-no-repeat bg-cover bg-center">
  <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Affordable Car Servicing for Every Need
    </h1>
    <p className='text-white leading-[30px]'>From routine maintenance to specialized repairs, our affordable car servicing covers all your automotive needs. Get professional care without the premium price.</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">
      <a href="#slide4" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide6" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full bg-banner-6 bg-no-repeat bg-cover bg-center">
  <div  className='w-[50%] flex items-start justify-center flex-col px-16 gap-5'>
    <h1 className='text-5xl font-bold text-white leading-[60px]'>
    Drive Carefree with Wallet-Friendly Car Servicing
    </h1>
    <p className='text-white leading-[30px]'>Say goodbye to costly surprises with our affordable car servicing solutions. Trust our expert team to keep your vehicle in top condition while keeping your budget intact.</p>
    <div className='flex items-center gap-5 box-border'>
        <button className='bg-primary text-white px-4 py-3 rounded-md font-semibold'>Discover More</button>
        <button className='bg-transparent border border-white rounded-md text-white px-4 py-3 font-semibold'>Latest Project</button>
    </div>
    </div>
    <div className="absolute right-10 bottom-10 flex items-center gap-5">
      <a href="#slide5" className="bg-[#ffffff33] w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundBack /></a> 
      <a href="#slide1" className="bg-primary w-12 h-12 rounded-full text-white flex items-center justify-center text-3xl"><IoIosArrowRoundForward/></a>
    </div>
  </div>
</div>
</div>
  )
}

export default Banner