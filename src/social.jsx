import React from 'react'

export default function social({Logos,Content}) {
  return (
    <div className='text-white'>
        <img className='h-10 m-3' src={Logos} alt={Content}/>
    </div>
  )
}
