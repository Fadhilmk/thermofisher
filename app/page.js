// pages/index.js
"use client";
import Navbar from '@/components/NavBar';
import BootstrapCarousel from '@/components/ScrollBanner';
import React, { useEffect, useRef, useState } from 'react';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutUs from './about/page';
import ContactUs from './contact/page';
import Footer from '@/components/Footer';
import AOS from 'aos';

const Home = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const refRow1 = useRef(null);
  const refRow2 = useRef(null);
  useEffect(()=>{
    AOS.init();
  })
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
