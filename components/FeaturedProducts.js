import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/Datas/product';

const FeaturedProducts = () => {
  const router = useRouter();
  return (
    <div className="mx-auto px-4 py-8 bg-white">
      <h1 className="text-2xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} onClick={() => router.push(`/product/${product.id}`)} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white hover:cursor-pointer">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.catNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
