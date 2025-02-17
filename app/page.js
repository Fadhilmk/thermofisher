// pages/index.js
"use client";
import Navbar from '@/components/NavBar';
import BootstrapCarousel from '@/components/ScrollBanner';
import React from 'react';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUs from '@/components/about';
import ContactUs from '@/components/contact';
import Footer from '@/components/Footer';
import FeaturedApplications from '@/components/FeaturedApplications';
const Home = () => {
  return (
    <>
      <Navbar />
      <BootstrapCarousel />
      <FeaturedProducts />
      <FeaturedApplications />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
