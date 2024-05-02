import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] mx-auto my-28 grid grid-cols-3 row-auto items-center gap-10 px-10 bg-[#151515] py-20 rounded-md'>
        <div className='flex items-center gap-5'>
            <img src="calender.svg" alt="calender.svg" />
            <div className='flex flex-col items-start gap-1'>
            <p className='text-sm text-white font-medium'>We are open monday-friday</p>
            <h1 className='text-2xl text-white font-bold'>7:00 am - 9:00 pm</h1>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <img src="phone.svg" alt="calender.svg" />
            <div className='flex flex-col items-start gap-1'>
            <p className='text-sm text-white font-medium'>Have a question?</p>
            <h1 className='text-2xl text-white font-bold'>+2546 251 2658</h1>
            </div>
        </div>
        <div className='flex items-center gap-5'>
            <img src="location.svg" alt="calender.svg" />
            <div className='flex flex-col items-start gap-1'>
            <p className='text-sm text-white font-medium'>Need a repair? our address</p>
            <h1 className='text-2xl text-white font-bold'>Liza Street, New York</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact