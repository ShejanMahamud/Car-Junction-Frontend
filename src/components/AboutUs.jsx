import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-[90%] mx-auto my-28 grid grid-cols-2 row-auto items-center gap-10'>
        <div className='flex flex-col items-center relative'>
            <img src="https://i.ibb.co/0qzJC4h/person.jpg" alt="person.png" className='rounded-lg w-3/4 object-cover h-[500px]'/>
            <img src="https://i.ibb.co/GcT64bW/parts.jpg" alt="parts.png" className='absolute border-8 border-white rounded-lg -bottom-16 -right-2 w-2/4 h-[300px] object-cover'/>
        </div>
        <div className='flex flex-col items-start gap-8'>
            <span className='text-primary font-bold text-lg '>About Us</span>
            <h1 className='text-4xl font-bold w-[50%]'>We are qualified & of experience in this field</h1>
            <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className='px-4 py-3 rounded-md bg-primary text-white font-bold'>Get More Info</button>
        </div>
    </div>
  )
}

export default AboutUs