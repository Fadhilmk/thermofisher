

"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const productsRef = collection(db, 'products');
        
        
        const featuredDocRef = doc(productsRef, 'featured');
        
        const featuredProductsRef = collection(featuredDocRef, 'featured-products');
        
        
        const querySnapshot = await getDocs(featuredProductsRef);
        
        
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto container  px-4 py-8 bg-white mb-20">
      <h1 className="text-2xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => router.push(`/product/${product.id}`)} 
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white hover:cursor-pointer"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-3">{product.catNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;


