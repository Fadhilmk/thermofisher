
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './style.css';

const ScrollBanner = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'slider'));
        const imageData = [];
        querySnapshot.forEach((doc) => {
          imageData.push({ id: doc.id, ...doc.data() });
        });
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel id='carousel' activeIndex={index} onSelect={handleSelect}>
      {images.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          <img src={item.imageUrl} alt={`Slide ${item.id}`}  onClick={() => router.push(`/products`)} className="imag-resp d-block w-100 h-50" />
          <Carousel.Caption>
            {/* <p>{item.title}</p>
              <p>{item.body}</p>
              <button className="btn btn-danger">Visit Docs</button> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ScrollBanner;


