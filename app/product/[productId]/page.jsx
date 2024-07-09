"use client";

import { products } from '@/Datas/product';
import Navbar from '@/components/NavBar';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const { productId } = useParams();
  const product = products.find((item) => item.id == productId);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Navbar />
      <div className={`container mx-auto px-4 py-8 bg-white text-black ${showModal ? 'blur-sm' : ''}`}>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img 
              src={product.image} 
              alt={product.name}
              width={300} 
              height={300} 
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-xl font-semibold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold mb-4">Price: {product.price}</p>
            <p className="text-xl font-semibold mb-4">Catalog Number: {product.catNumber}</p>
            <p className="text-gray-700">{product.desc}</p>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleModal}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Contact" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">Product Model Number</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="model" type="text" value={product.catNumber} readOnly />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
