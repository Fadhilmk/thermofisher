// components/Navbar.js
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
      <nav className="bg-white border border-gray-300 py-4 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section for Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/ThermoFisher.png"
              alt="Logo"
              width={120}
              height={57}
              className="object-contain"
            />
          </div>

          {/* Center Section for Search Bar */}
          <div className="flex-grow mx-8 flex">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-50 sm:w-48 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none border border-gray-300"
            />
            <button className="px-2 ml-1 py-2 border border-gray-300 rounded-md">
            <Image
              src='/icons/search.png'
              alt="Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            </button>
          </div>

          {/* Right Section for Nav Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-600 no-underline ">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-red-600 no-underline">Products</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 no-underline ">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 no-underline ">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden flex flex-col space-y-4 mt-4 transition-all duration-1000 ${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <Link href="/" className="text-gray-700 hover:text-red-600 no-underline ">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-red-600 no-underline ">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 no-underline ">About Us</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900 no-underline hover:font-semibold">Contact Us</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
