// pages/index.js
"use client";
import Navbar from '@/components/NavBar';
import BootstrapCarousel from '@/components/ScrollBanner';
import React from 'react';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUs from './about/page';
import ContactUs from './contact/page';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <BootstrapCarousel />
      <FeaturedProducts />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
