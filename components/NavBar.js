// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white">
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
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white">
                <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white">
                <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white">
                <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
