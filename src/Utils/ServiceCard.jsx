import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({service}) => {

const navigate = useNavigate();

const {_id,title,img,price} = service;

  return (
    <div className='w-full flex flex-col items-start border border-[#E8E8E8] rounded-md px-5 py-5'>
    <img src={img} alt="service.jpg" className='rounded-md mb-4'/>
    <h1 className='font-bold text-xl mb-2'>{title}</h1>
    <div className='flex items-center justify-between w-full'>
    <span className='text-primary font-semibold'>Price : ${price}</span>
    <button onClick={()=>{navigate(`/checkout/${_id}`)}}><IoIosArrowRoundForward className='text-3xl text-primary'/></button>
    </div>
</div>
  )
}

export default ServiceCard