// components/Navbar.js
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-red-600 text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/icons/message.png" alt="Email" className="w-5 h-5" />
                <span className="hidden sm:inline">email@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/icons/phone-call.png" alt="Phone" className="w-5 h-5" />
                <span className="hidden sm:inline">(123) 456-7890</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-8">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <img src="/icons/twitter.png" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Non-Sticky Navbar */}
      <nav className="bg-white py-4 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Section for Logo */}
            <div className="flex items-center space-x-4">
            <Image
              src="/icons/ThermoFisher.png"
              alt="Logo"
              width={120}  // width in pixels
              height={57} // height in pixels
              className="object-contain"
            />            
            </div>

            {/* Center Section for Search Bar */}
            <div className="flex-grow mx-8 flex">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-48 center px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none border border-gray-300 flex-grow"/>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md ml-1">
              Search
            </button>
          </div>


            {/* Right Section (Empty for now) */}
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
