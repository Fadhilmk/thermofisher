// pages/index.js
"use client";
import Navbar from '@/components/NavBar';
import BootstrapCarousel from '@/components/ScrollBanner';
import React from 'react';
import FeaturedProducts from '@/components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Navbar />
      <BootstrapCarousel />
      <FeaturedProducts />
      {/* <ProductList /> */}
    </>
  );
};

export default Home;
