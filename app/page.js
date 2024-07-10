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
      <a href="https://nicepage.com/html-templates/preview/about-digital-agency-2880966?device=desktop">https://nicepage.com/html-templates/preview/about-digital-agency-2880966?device=desktop</a>
    </>
  );
};

export default Home;
