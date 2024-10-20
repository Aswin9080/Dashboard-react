import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BitcoinData = () => {
    const { state } = useLocation()
    return (
        <div className='text-2xl md:text-5xl hover:text-red-500 cursor-pointer'>
            <h1 className='text-center pt-10'>Hi I am {state.mail}</h1>
        </div>
    );
};

export default BitcoinData;
