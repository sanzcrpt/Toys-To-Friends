import React from 'react'
import kids from '../imgs/kids.jpg'

function Info() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-sky-600 h-[550px] md:h-[350px]'>
        <div className='p-4'>
            <img src={kids} className='h-[300px] rounded-md'></img>
        </div>
        <div className='text-center text-[20px] md:ml-[40px] md:pr-4 lg:space-y-10 lg:pl-[100px] md:pt-10 md:h-[300px] space-y-4 '>
            <p className='h-[80px] md:h-[90px] lg:w-[800px] md:w-[550px] bg-lime-500 md:rounded-md font-bold text-white pt-3 md:pt-6  px-3'>Help us help the earth while bringing toys to kids!</p>
            <p className='h-[80px] md:h-[90px] border-2 md:rounded-md pt-6 font-bold bg-white '>How we help the environment</p>
        </div>
    </div>
  )
}

export default Info
