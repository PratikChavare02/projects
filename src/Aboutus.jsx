import React from 'react'

function Aboutus({content}) {
  return (
    <div className='text-white bg-black h-22 w-full justify-between pt-4' id='about'>

        <div className='text-white flex items-center justify-center text-4xl font-bold font-mono pt-3'>{content}</div>
    </div>
  )
}

export default Aboutus