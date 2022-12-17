import React from 'react'
import logo from '../imgs/logo.png'

function Hero() {
  return (
    <div className="h-[600px] w-full relative">
        <img src={logo} className='max-h-[400px] m-auto mt-4'></img>
        <div className='absolute w-full flex flex-col md:flex-row md:justify-between md:px-[60px] md:top-[50%] space-y-4'>
            <div className='md:w-[300px] text-center'>
            <p className='font-bold text-[20px] p-2 bg-sky-600 rounded-md h-[60px] text-center text-white mt-4 '>Our Mission</p>
            <p className='invisible md:visible bg-white border-2 md:w-[200px] md:h-[60px] m-auto md:mt-10 md:p-2'>Mission</p>
            </div>
            <div className=' text-white rounded-md md:md:w-[300px] text-center'>
                <p className='font-bold text-[20px] p-2 bg-sky-600 rounded-md h-[60px] text-center'>How It Works</p>
                <p className='collapse md:visible bg-white text-black border-2 md:w-[200px] md:h-[60px] m-auto md:mt-10 md:p-2'>Description</p>
            </div>

        </div>
    </div>
  )
}

export default Hero