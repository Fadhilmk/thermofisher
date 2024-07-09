import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Niton™ DXL Precious Metal Analyzer',
    price: '$10.00',
    catNumber : 'Catalog number: XL2PLUS',
    image: 'https://www.thermofisher.com/TFS-Assets/CAD/product-images/DXL-Precious-Metal-Analyzer.jpg-650.jpg',
  },
  {
    id: 2,
    name: 'Niton™ XL2 XRF Precious Metal Analyzer',
    price: '$20.00',
    catNumber : 'Catalog number: XL2PLUS',
    image: 'https://www.thermofisher.com/TFS-Assets/CAD/product-images/F181873~p.eps-650.jpg',
  },
  {
    id: 3,
    name: 'Niton™ XL2 XRF Precious Metal Analyzer',
    price: '$30.00',
    catNumber : 'Catalog number: XL2PLUS',
    image: 'https://www.thermofisher.com/TFS-Assets/CAD/product-images/xl2-xrf-analyzer-right-profile.jpg-650.jpg',
  },
  {
    id: 4,
    name: 'Niton™ XL2 XRF Precious Metal Analyzer',
    price: '$10.00',
    catNumber : 'Catalog number: XL2PLUS',
    image: 'https://www.thermofisher.com/TFS-Assets/CAD/product-images/F181873~p.eps-650.jpg',
  },

  // Add more products as needed
];

const ProductList = () => {
  const router = useRouter();
  const handleProductClick = (id, image) => {
    router.push({
      pathname: '/product',
      query: { id, image: JSON.stringify(image) },
    });
  };
  return (
    <div className="mx-auto px-4 py-8 bg-white">
      <h1 className="text-2xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.catNumber}</p>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              onClick={() => handleProductClick(product.id, product.image)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
