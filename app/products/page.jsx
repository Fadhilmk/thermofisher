
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Navbar from '@/components/NavBar';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Reference to the 'products' collection
        const productsRef = collection(db, 'products');
        
        // Reference to the 'all-products' document inside the 'products' collection
        const allProductsDocRef = doc(productsRef, 'allproducts');
        
        // Reference to the 'all-products' subcollection inside the 'all-products' document
        const allProductsCollectionRef = collection(allProductsDocRef, 'all-products');
        
        // Fetch all documents from the 'all-products' subcollection
        const querySnapshot = await getDocs(allProductsCollectionRef);
        
        // Map the documents to get the data along with their IDs
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Set the products data to the state
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
    <>
      <Navbar />
      <div className="mx-auto px-4 py-8 bg-white">
        <h1 className="text-2xl font-bold mb-8">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} onClick={() => router.push(`/product/${product.id}`)}  className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.catNumber}</p>
              
              <button 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                onClick={() => router.push(`/product/${product.id}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
