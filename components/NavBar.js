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
          <div className="flex justify-between items-center h-10">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/icons/message.png" alt="Email" className="w-5 h-5" />
                <span className="hidden sm:inline" style={{ fontSize: '0.95rem' }}>email@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/icons/phone-call.png" alt="Phone" className="w-5 h-5" />
                <span className="hidden sm:inline" style={{ fontSize: '0.95rem' }}>(123) 456-7890</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-8">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white">
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white">
                <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white">
                <img src="/icons/twitter.png" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Non-Sticky Navbar */}
      <nav className="paddingNav sticky top-0 z-10 py-2 bg-white border border-gray-300 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="responsive-nav" className="flex h-20" style={{alignItems:'center', justifyContent:'space-between'}}>
            {/* Left Section for Logo */}
            <div className="flex items-center">
              <Image
                src="/icons/ThermoFisher.png"
                alt="Logo"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            {/* Center Section for Search Bar */}
            <div className="hidden lg:flex items-center flex-grow mx-8 justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-96 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none border border-blue-600"
              />
              <button className="ml-2 px-2 py-2">
                <Image
                  src="/icons/search.png"
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
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 no-underline">Blog</Link>
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

          {/* Mobile Search Bar */}
          <div className="flex lg:hidden items-center justify-center mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-72 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none border border-blue-600"
            />
            <button className="ml-2 px-2 py-2">
              <Image
                src='/icons/search.png'
                alt="Search"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden flex flex-col text-center space-y-4 mt-2 transition-all duration-1000 ${isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <Link href="/" className="text-gray-700 mt-2 hover:text-blue-600 no-underline">Home</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 no-underline">Products</Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 no-underline">About Us</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 no-underline">Contact Us</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 no-underline">Blog</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
