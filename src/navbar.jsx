import React from 'react';
import Logo from './assets/CODERS DOT IN (1).png'; 

function navbar() {
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <div className='font-mono w-full h-22 bg-black flex items-center justify-between pl-6 pr-6'>
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className='h-13' />
        <h1 className='ml-3 text-white text-2xl font-bold '>I<span className='text-purple-400'> EXPLAIN</span></h1>
      </div>

      {/* Navigation Menu */}
      <ul className="flex space-x-6 text-white font-medium">
        
        <li className='hover:text-gray-300 cursor-pointer'>
          <a href='/navbar'>{navItems[0]}</a>
          </li>
        <li className='hover:text-gray-300 cursor-pointer'><a href='#about'>{navItems[1]}</a></li>
        <li className='hover:text-gray-300 cursor-pointer'><a href='#services'>{navItems[2]}</a></li>
        <li className='hover:text-gray-300 cursor-pointer'><a href='#contact'>{navItems[3]}</a></li>
      </ul>
    </div>
  );
}

export default navbar;
