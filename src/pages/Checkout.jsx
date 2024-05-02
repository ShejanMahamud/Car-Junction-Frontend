import React from 'react'

const Checkout = () => {
  return (
    <div className='w-[90%] mx-auto my-10'>
        <div className='w-full bg-checkout bg-no-repeat bg-cover bg-center rounded-lg h-[300px] flex items-center relative'>
            <span className='text-white font-bold text-3xl px-10 absolute'>Checkout</span>
            <div className='w-full h-full flex items-end justify-center'>
              <div className='bg-primary px-5 py-3 text-white inline-flex items-center justify-center'>
                Home / Checkout
            </div>
            </div>
        </div>

        <form className='w-full bg-[#F3F3F3] rounded-lg px-10 py-10 grid grid-cols-2 row-auto items-center gap-10 my-28'>
          <input type="text" placeholder='First Name' className='placeholder:text-[#A2A2A2] bg-white px-5 py-4 rounded-md focus:outline-none' required/>
          <input type="text" placeholder='Last Name' className='placeholder:text-[#A2A2A2] bg-white px-5 py-4 rounded-md focus:outline-none' required/>
          <input type="text" placeholder='Your Phone' className='placeholder:text-[#A2A2A2] bg-white px-5 py-4 rounded-md focus:outline-none' required/>
          <input type="email" placeholder='Your Email' className='placeholder:text-[#A2A2A2] bg-white px-5 py-4 rounded-md focus:outline-none' required/>
          <textarea placeholder='Your Subject' className='placeholder:text-[#A2A2A2] bg-white px-5 py-4 rounded-md focus:outline-none col-span-2' cols="30" rows="10"></textarea>
          <button className='bg-primary font-bold text-white text-lg rounded-md py-3 col-span-2'>Order Confirm</button>
        </form>
    </div>
  )
}

export default Checkout