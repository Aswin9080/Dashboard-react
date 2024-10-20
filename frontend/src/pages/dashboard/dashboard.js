import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BitcoinData from '../../Apis';

export default function Dashboard() {

  const [ip, setIP] = useState('');
  const menus = ['Dashboard', 'Post', 'Pages', 'Congrats', 'Users', 'Settings'];

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIP(response.data.ip);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchIP();
  }, []);

  return (
    <div className='h-full flex flex-col'>
      <div className='flex-1 flex'>
        {/* Sidebar */}
        <div className='fixed border border-r-gray-500 rounded-r-2xl h-full shadow-xl'>
          <div className='px-2 py-4 w-[200px] flex flex-col'>
            {menus.map((item, index) => (
              <span key={index} className='px-2 py-2 hover:bg-purple-300 cursor-pointer'>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Content (responsive) */}
        <div className='ml-[200px] flex-1 px-4 py-6 md:px-10 md:py-10  '>
          <div className='border p-6 flex md:flex-row items-center space-x-10 shadow-xl overflow-y-auto'>
            <div className='border rounded-full border-purple-400'>
              <img
                src={'https://picsum.photos/200'}
                className='rounded-full w-14 h-14 object-cover'
                alt='Profile'
              />
            </div>
            <div className='mt-4 md:mt-0'>
              <p className='font-bold text-lg'>Aswin</p>
              <p>{ip ? `IP: ${ip}` : 'Fetching IP...'}</p>
            </div>
          </div>
          <BitcoinData /> 
        </div>
      </div>
    </div>
  );
}
