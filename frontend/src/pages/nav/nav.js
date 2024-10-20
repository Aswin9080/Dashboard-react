import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import UseTheme from '../useTheme';

export default function Nav() {
  const [nextTheme, toggleTheme] = UseTheme();
  const [isDarkMode, setIsDarkMode] = useState(nextTheme === 'dark');

  const handleChange = () => {
    setIsDarkMode(prev => !prev);
    toggleTheme();
  };

  return (
    <div className='px-2 border border-gray-500 rounded-b-2xl shadow-xl fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800'>
      <div className='container mx-auto flex justify-between px-2 py-5 '>
        <h1 className='text-xl font-bold text-gray-800 dark:text-white'>Online</h1>
        <div className='flex space-x-3 items-center'>
          <div onClick={handleChange} className='cursor-pointer'>
            {isDarkMode ? 
              <MdLightMode className='size-5' /> 
              : 
              <MdDarkMode className='size-5' />
            }
          </div>
          <Link to="/" className='border border-purple-500 px-2 py-1 rounded text-gray-800 dark:text-white'>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
