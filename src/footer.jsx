import React from 'react'
import Logo from './assets/CODERS DOT IN (1).png'; 

function footer() {
  return (
    <div className='h-1/2 w-full bg-sky-800 text-black flex-col justify-center p-5 '>
        <div className='flex justify-center w-full'>
            <img src={Logo} alt="image" className='h-20'/>
        </div>
        <div className='flex justify-center w-full font-bold m-2'>
       
            Your Dream, Our Mission.

        </div>
        <div className='flex justify-center w-full font-bold md-2 text-2xl'>
       
            I&nbsp;<span className='text-purple-400'>EXPLAIN</span>

        </div>
        <div className='flex justify-center w-full font-bold mt-0'>
            
            
                Providing Best Education Since 2025...
            
            
        </div>
        <div className='flex justify-center w-full ml-0 mt-5 '>
            Copyright © $2025 - All right reserved
        </div>

        <div className='flex justify-center w-full ml-0 mt-5'>
        Some images used on the website may be copyrighted.
        </div>
    </div>
  )
}

export default footer