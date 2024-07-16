
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { collection, doc, getDoc, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ApplicationDetail() {
  const { applicationid } = useParams();
  const [application, setApplication] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        if (!applicationid) {
          console.log('No applicationid found');
          return;
        }

        const applicationRef = doc(db, 'product-applications', applicationid);
        const applicationSnapshot = await getDoc(applicationRef);

        if (applicationSnapshot.exists()) {
          const applicationData = applicationSnapshot.data();

          if (applicationData.publishedAt && applicationData.publishedAt.toDate) {
            applicationData.publishedAt = applicationData.publishedAt.toDate();
          } else {
            console.warn('publishedAt is missing or not a valid Firestore Timestamp:', applicationData.publishedAt);
          }

          setApplication(applicationData);

          // Fetch the corresponding product
          if (applicationData.productId) {
            const productRef = doc(db, 'products/allproducts/all-products', applicationData.productId);
            const productSnapshot = await getDoc(productRef);
            if (productSnapshot.exists()) {
              setProduct(productSnapshot.data());
            } else {
              console.log('No such product!');
            }
          } else {
            console.warn('No productId found in application data');
          }
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product application:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applicationid]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    try {
      const docRef = await addDoc(collection(db, 'contact-forms'), {
        ...form,
        createdAt: Timestamp.now(),
      });
      console.log('Document written with ID: ', docRef.id);
      setForm({ name: '', email: '', message: '' });
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      setFormError('An error occurred while submitting the form. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Application not found</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">{application.title}</h1>
          <div className="text-gray-600 mb-8">
            <p>Published on: {application.publishedAt ? new Date(application.publishedAt).toLocaleDateString() : 'Date not available'}</p>
          </div>
          {application.image && (
            <img 
              src={application.image} 
              alt={application.title} 
              className="w-full h-64 object-cover mb-8 rounded-lg shadow-md"
            />
          )}
          <div className="prose prose-lg text-gray-800 mb-8">
            {application.summary}
          </div>
          <div className="prose prose-lg text-gray-800 mb-8">
            {application.content}
          </div>
          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg" 
                  rows="4"
                  required 
                />
              </div>
              {formError && <p className="text-red-500">{formError}</p>}
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                disabled={formLoading}
              >
                {formLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          {product && (
            <div className="border-t pt-8 mt-8">
              <h2 className="text-2xl font-bold mb-4">Product</h2>
              <div className="border p-4 rounded-lg shadow-lg bg-white">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-contain mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.catNumber}</p>
                <button 
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => router.push(`/product/${application.productId}`)}
                >
                  View Product
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
