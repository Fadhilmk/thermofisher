'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/Datas/product';

const ProductDetails = () => {
  const router = useRouter();
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Product Details</h1>
      {id && image ? (
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Image 
              src={JSON.parse(image)} 
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


// components/ProductDetails.js
// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/components/NavBar';
// import Image from 'next/image';

// const products = [
//   {
//     id: 1,
//     name: 'Niton™ DXL Precious Metal Analyzer',
//     price: '$10.00',
//     catNumber: 'Catalog number: XL2PLUS',
//     image: 'https://www.thermofisher.com/TFS-Assets/CAD/product-images/DXL-Precious-Metal-Analyzer.jpg-650.jpg',
//     desc : 'Be absolutely sure of the value of the precious metals you buy and sell with a fast, simple nondestructive solution for gold analysis. Quickly distinguish between gold plating and solid gold and determine the accurate karat (K) weight of gold jewelry with the Thermo Scientific™ Niton™ DXL Precious Metal Analyzer. Designed specifically for countertop use in retail environments, the Niton DXL analyzer, with Thermo Scientific™ AuDIT™ gold-plating detection technology, delivers fast, reliable results for gold testing and metal analysis with just the push of a button.'
//   }
// ];

// const ProductDetails = () => {
//   // const router = useRouter();
//   // console.log(router)
  
//   const product = products[0]; // Access the first product in the array

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8 bg-white text-black">
//         <div className="flex flex-col md:flex-row items-center md:items-start">
//           <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
//             <img 
//               src={product.image} 
//               alt={product.name}
//               width={300} 
//               height={300} 
//               className="rounded"
//             />
//           </div>
//           <div className="w-full md:w-1/2 md:pl-8">
//             <p className="text-xl font-semibold mb-4">Product ID: {product.id}</p>
//             <p className="text-xl font-semibold mb-4">Product Name: {product.name}</p>
//             <p className="text-xl font-semibold mb-4">Price: {product.price}</p>
//             <p className="text-xl font-semibold mb-4">Catalog Number: {product.catNumber}</p>
//             <p className="text-gray-700">{product.desc}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;
