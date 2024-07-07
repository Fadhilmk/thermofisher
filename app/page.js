// pages/index.js
import Navbar from '@/components/NavBar';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js App</h1>
        <p className="mt-4 text-lg text-gray-700">This is a simple Next.js project styled with Tailwind CSS.</p>
        <div className="mt-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;
