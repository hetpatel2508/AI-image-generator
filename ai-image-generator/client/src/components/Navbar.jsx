import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className=" bg-blue-600 text-gray-800 pt-4">
      <div className=" mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">
          <img src="/LOGO.png" className='w-[140px] h-full' />
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="w-[70px] h-[37px] flex justify-center items-center ">Pricing</Link>
          <Link to="/login" className="w-[70px] h-[37px] flex justify-center items-center hover:text-gray-300 hover:bg-gray-500 rounded-full transition ease-in-out duration-300">Login</Link>
          <Link to="/temp" className="w-[70px] h-[37px] flex justify-center items-center hover:text-gray-300 hover:bg-gray-500 rounded-full transition ease-in-out duration-300">temp</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;