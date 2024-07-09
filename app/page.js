// pages/index.js
"use client";
import Navbar from '@/components/NavBar';
import BootstrapCarousel from '@/components/ScrollBanner';
import ProductList from '@/pages/productsList';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <BootstrapCarousel />
      <ProductList />
    </>
  );
};

export default Home;
