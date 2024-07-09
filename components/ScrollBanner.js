// components/ScrollBanner.js
"use client";

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScrollBanner = () => {
  const images = [
    { id: 1, imageUrl: '/banner/pic1.png', title: 'Slide 1', body: 'Description for Slide 1' },
    { id: 2, imageUrl: '/banner/pic2.png', title: 'Slide 2', body: 'Description for Slide 2' },
    { id: 3, imageUrl: '/banner/pic3.png', title: 'Slide 3', body: 'Description for Slide 3' },
    { id: 4, imageUrl: '/banner/pic4.png', title: 'Slide 4', body: 'Description for Slide 4' }
  ];
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((item) => (
          <Carousel.Item key={item.id} interval={4000}>
            <img src={item.imageUrl} alt={`Slide ${item.id}`} className="d-block w-100" />
            <Carousel.Caption>
              {/* <p>{item.title}</p>
              <p>{item.body}</p>
              <button className="btn btn-danger">Visit Docs</button> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ScrollBanner;
