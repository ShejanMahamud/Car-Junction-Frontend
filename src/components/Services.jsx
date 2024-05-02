import React from 'react';
import ServiceCard from '../Utils/ServiceCard';
import useServices from '../hooks/useServices';
import Skeleton from './../Utils/Skeleton';

const Services = () => {

const {data,isPending} = useServices();

if(isPending){
  return 
}

  return (
    <div className='w-[90%] mx-auto my-28 flex flex-col items-center'>
        <h1 className='text-primary font-bold text-lg text-center mb-4'>Service</h1>
        <h1 className='text-4xl font-bold text-center mb-4'>Our Service Area</h1>
        <p className='text-center w-[50%] mx-auto mb-4 text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
       {
        isPending ?  <div className='w-full my-10 grid grid-cols-3 row-auto items-center gap-10'>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        </div>
        : 
        <div className='w-full my-10 grid grid-cols-3 row-auto items-center gap-10'>
        {
            data.map(service => <ServiceCard service={service}/>)
        }
        </div>
       }
       <button className='bg-transparent border border-primary text-primary font-semibold text-lg px-4 py-2 rounded-md'>More Services</button>
    </div>
  )
}

export default Services