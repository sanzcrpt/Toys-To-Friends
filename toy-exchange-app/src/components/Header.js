// import React from 'react'
// import logo from '../imgs/logo.png'
// import { FaUserCircle } from 'react-icons/fa'

// function Header() {
//   return (

//             <div className='flex h-[100px]  bg-sky-600 justify-between'>
//                 <div className='flex'>
//                     <img src={logo} className='mx-5 w-[100px] h-fit '></img>
//                 </div>
//                 <div className='flex h-[60px] m-auto md:space-x-4 md:items-center md:mr-[20px] md:p-4'>
//                     <button className='p-4 mx-4 rounded-md  bg-white'>Marketplace</button>
//                     <button className='p-4 rounded bg-white'>Sign In/Sign Up</button>
//                     <FaUserCircle size={40} className='collapse md:visible'/>
//                 </div>
//             <div>

//                 </div>
//             </div>

//   )
// }

// export default Header

import React from 'react'
import logo from '../imgs/logo.png'
import { FaUserCircle } from 'react-icons/fa'

function Header() {
  return (

            <div className='flex h-[100px]  bg-sky-600 justify-between'>
                <div className='flex'>
                    <img src={logo} className='mx-5 lg:ml-7 w-[100px] h-fit '></img>
                </div>
                <div className='flex h-[60px] m-auto md:space-x-4 md:items-center md:mr-[20px] md:p-4'>
                    <button className='p-4 mx-4 rounded-md  bg-white'>Marketplace</button>
                    <button className='p-4 rounded bg-white'>Sign In/Sign Up</button>
                    <FaUserCircle size={40} className='collapse md:visible'/>
                </div>
                <div>

                </div>
            </div>

  )
}

export default Header


