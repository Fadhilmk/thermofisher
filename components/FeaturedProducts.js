

// "use client"
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { collection, doc, getDocs, query, where } from 'firebase/firestore';
// import { db } from '@/firebase';

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Reference to the 'products' collection
//         const productsRef = collection(db, 'products');
        
//         // Reference to the 'featured' document inside the 'products' collection
//         const featuredDocRef = doc(productsRef, 'featured');
        
//         // Reference to the 'featured-product' subcollection inside the 'featured' document
//         const featuredProductsRef = collection(featuredDocRef, 'featured-products');
        
//         // Query to get all documents in the 'featured-product' subcollection
//         const querySnapshot = await getDocs(featuredProductsRef);
        
//         // Map the documents to get the data along with their IDs
//         const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
//         // Set the products data to the state
//         setProducts(productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl font-semibold">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto container  px-4 py-8 bg-white mb-20">
//       <h1 className="text-2xl font-bold mb-8">Featured Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div 
//             key={product.id} 
//             onClick={() => router.push(`/product/${product.id}`)} 
//             className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white hover:cursor-pointer"
//           >
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               className="w-full h-48 object-contain mb-4 rounded"
//             />
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-700 mb-3">{product.catNumber}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;


"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import './style.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Reference to the 'products' collection
        const productsRef = collection(db, 'products');
        
        // Reference to the 'featured' document inside the 'products' collection
        const featuredDocRef = doc(productsRef, 'featured');
        
        // Reference to the 'featured-product' subcollection inside the 'featured' document
        const featuredProductsRef = collection(featuredDocRef, 'featured-products');
        
        // Query to get all documents in the 'featured-product' subcollection
        const querySnapshot = await getDocs(featuredProductsRef);
        
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
      <div className="mx-auto container px-4 py-8 bg-white mb-20">
        <h1 className="text-2xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4).fill(0).map((_, index) => (
            <div 
              key={index} 
              className="skeleton-card"
            >
              <div className="skeleton-image"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto container px-4 py-8 bg-white mb-20">
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
