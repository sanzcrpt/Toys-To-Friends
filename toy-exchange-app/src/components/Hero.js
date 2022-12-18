import React from 'react'
import logo from '../imgs/logo.png'

function Hero() {
  return (
    <div className="h-[800px] w-full relative">
        <img src={logo} className='max-h-[400px] m-auto mt-4'></img>
        <div className='absolute w-full flex flex-col md:flex-row md:justify-between md:px-[60px] md:top-[30%] space-y-4'>
            <div className='md:w-[300px] text-center'>
            <p className='font-bold text-[20px] p-2 bg-sky-600 rounded-md h-[60px] text-center text-white lg:w-[400px]'>Our Mission</p>
            <p className='invisible md:visible bg-white border-2 md:w-[200px] lg:w-[400px] lg:h-[300px]  md:h-[60px] m-auto md:mt-6 md:p-2'> Our mission is to provide a sustainable and fun solution for children to obtain new toys without contributing to the negative environmental impacts of the toy industry. By facilitating the exchange of gently used toys between children around the world, we aim to reduce the amount of plastic waste in the oceans and promote a culture of sharing and reusing resources. Through our toy exchange program, we hope to inspire the next generation of environmental stewards and create a brighter future for all.</p>
            </div>
            <div className='md:w-[300px] lg:w-[400px] text-center'>
                <p className='font-bold text-[20px] p-2 bg-sky-600 rounded-md h-[60px] text-center text-white lg:w-[400px]'>How It Works</p>
                <p className='invisible md:visible bg-white border-2 md:w-[200px] lg:w-[400px] lg:h-[300px]  md:h-[60px] m-auto md:mt-6 md:p-2 overflow-auto'>To participate in our toy exchange program, follow these simple steps:

Sign up online to join the toy exchange. You'll need to create a user account and provide some basic information about yourself and the toy you want to exchange.

Find a participating organization near you. We have toy exchange locations all around the world. You can search for a location on our website or use our map to find the nearest one to you.

Bring your toy to the participating organization. You don't need to bring a receipt or any documentation.

Browse and select a new toy. You can browse the available options and choose a new toy to take home, or you can donate your toy without receiving a new one in return. You can also view the toy catalog online before you visit the participating organization.

Take your new toy home and enjoy! Once you've selected your new toy, you can start playing right away. Thank you for participating in our toy exchange program and making a sustainable choice!</p>
            </div>

        </div>
    </div>
  )
}

export default Hero