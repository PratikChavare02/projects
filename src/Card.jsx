import React from 'react'
import logo from './assets/java.jpg'

function Card({content,image}) {
  return (
    
        <div className='h-130 w-80 hover:h-150 hover:w-100 bg-gray-800 border-solid border border-black-white rounded-xl p-4 flex items-center flex-col m-6'>
            
                <img src={image} alt="image" className='rounded-xl'/>

                <p className='pt-5 text overflow-auto'>
                    {content}
                </p>
                <button className='text-bold bg-purple-600 hover:bg-purple-300 border-2 p-2 rounded-2xl mt-7 ml-4 mr-9 text-black h-11 w-25'>
                <span className='font-bold'>Click Me</span> 
                </button>
            
        </div>

  )
}

export default Card