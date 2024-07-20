// components/FeaturedApplications.jsx
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const FeaturedApplications = () => {
  const router = useRouter();
  const [featuredApplications, setFeaturedApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedApplications = async () => {
      try {
        const applicationsRef = collection(db, 'product-applications');
        const querySnapshot = await getDocs(applicationsRef);
        const applicationsData = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .slice(0, 4); 

        setFeaturedApplications(applicationsData);
      } catch (error) {
        console.error('Error fetching featured applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedApplications();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-1 bg-white">
      <h1 className="text-2xl font-bold mb-8">Featured Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredApplications.map(application => (
          <div key={application.id} className="group border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col">
            <div className="relative">
              <img
                src={application.image}
                alt={application.title}
                className="w-full h-48 object-cover mb-6 rounded group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-xl">
                View Details
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{application.title}</h2>
            <p className="text-gray-700 mb-6 line-clamp-3">{application.summary}</p>
            <button
              className="mt-auto w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => router.push(`/applications/${application.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedApplications;
