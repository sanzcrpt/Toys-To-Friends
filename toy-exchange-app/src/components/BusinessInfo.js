import React from 'react';
import handshakeImg from '../imgs/handshake.png'


function BusinessInfo() {
  return (
    <div className='flex flex-col md:flex-row mt-5 md:items-center'>
    <div className='text-center text-[20px] space-y-4 md:ml-[40px] md:pr-4 lg:space-y-10 lg:p-20'>
        <p className='h-[80px] md:h-[90px] lg:w-[800px] md:w-[550px] bg-amber-500 md:rounded-md font-bold text-white pt-3 md:pt-6  px-3'>Are you a business? You can help too!</p>
        <p className='h-[80px] md:h-[90px] border-2 md:rounded-md pt-6 font-bold bg-white '>How we help the environment</p>
    </div>
    <div className='p-4'>
        <img src={handshakeImg} className='h-[300px] lg:h-[350px]  rounded-md'></img>
    </div>
</div>
)
  
}

export default BusinessInfo