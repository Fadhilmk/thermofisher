// components/ProductDetails.js
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductDetails = () => {
  const router = useRouter();
  const { id, image } = router;
  console.log(router)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Product Details</h1>
      {id && image ? (
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Image 
              src={image} 
              alt={`Product ${id}`} 
              width={300} 
              height={300} 
              className="rounded"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <p className="text-xl font-semibold mb-4">Product ID: {id}</p>
            <p className="text-gray-700">Here you can add more details about the product. This area will contain product description, features, pricing information, etc.</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
