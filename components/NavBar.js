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
      <nav className="bg-blue-600 text-white z-50">
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
      <nav className="sticky top-0 z-10 bg-white border border-gray-300 py-10 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id='responsive-nav' className="flex justify-between items-center">
          
          {/* Left Section for Logo */}
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <Image
                src="/icons/ThermoFisher.png"
                alt="Logo"
                width={120}
                height={57}
                className="object-contain"
              />
            </div>
          </div>
            
            {/* Center Section for Search Bar */}
            <div className="resSearchBar mx-1 flex justify-center align-center">
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-bar-width px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none border border-blue-600"
              />
              <button className="searchButton px-2 ml-1 py-2">
                <Image
                  src='/icons/search.png'
                  alt="Search"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>
            </div>
            
            {/* Right Section for Nav Links */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link href="/" className="text-gray-700 hover:text-blue-600 no-underline">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 no-underline">Products</Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 no-underline">About Us</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 no-underline">Contact Us</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden flex flex-col text-center space-y-4 mt-8 transition-all duration-1000 ${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <Link href="/" className="text-gray-700 mt-10 hover:text-red-600 no-underline">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-red-600 no-underline">Products</Link>
          <Link href="/#about" className="text-gray-700 hover:text-red-600 no-underline">About Us</Link>
          <Link href="/#contact" className="text-gray-700 hover:text-gray-900 no-underline hover:font-semibold">Contact Us</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
