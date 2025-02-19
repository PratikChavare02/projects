import React, { useEffect, useState } from 'react'
import Logo from './assets/2.jpeg'

function First() {
    
    const phrases = ["OUR RESPONSIBILITY", "OUR EMPOWERMENT", "OUR PRIORITY"];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1500); // Change text every 1.5 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
    return (
    <div className='w-full h-full text-white flex items-center bg-gray-900 justify-between'>
        
      <div className="p-3 w-1/2 pl-8">
        <h1 className="font-mono text-4xl font-bold">
          YOUR EDUCATION,{" "}
          <span className="text-purple-500 transition-opacity duration-1500 ease-in-out">
            {phrases[index]}
          </span>
          <p className='text-lg pt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ab commodi minus odio corrupti. Quos unde provident sit tempora. Esse.</p>
        </h1>
      </div>
      <div className="flex items-center w-150 h-1/3 p-5">/
              <img src={Logo} alt="Logo" className=' mr-4' />
              
            </div>
    </div>
    );
}

export default First