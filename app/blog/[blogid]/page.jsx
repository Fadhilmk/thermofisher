"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function BlogPostDetail() {
  const { blogid } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!blogid) {
          console.log('No blogid found');
          return;
        }

        const postRef = doc(db, 'blog-posts', blogid);
        const postSnapshot = await getDoc(postRef);

        if (postSnapshot.exists()) {
          const postData = postSnapshot.data();
          
          // Check if publishedAt exists and is a Firestore Timestamp
          if (postData.publishedAt && postData.publishedAt.toDate) {
            postData.publishedAt = postData.publishedAt.toDate(); // Convert Firestore Timestamp to Date
          } else {
            console.warn('publishedAt is missing or not a valid Firestore Timestamp:', postData.publishedAt);
            // Handle case where publishedAt is missing or not a valid Firestore Timestamp
          }

          setPost(postData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [blogid]); // Ensure blogid is included in the dependency array

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Blog post not found</div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            {/* Ensure to check if post.publishedAt is defined before calling toDate() */}
            <p>Published on: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Date not available'}</p>
          </div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 object-cover mb-8 rounded"
          />
          <div className="prose prose-lg text-gray-800">
            {post.summary}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
