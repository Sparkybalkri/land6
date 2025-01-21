import React, { useState, useEffect } from 'react';
import styles from './SliderBlock.module.css';

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
];

const SliderBlock = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.image}
          />
        ))}
        {/* Клонируем слайды для бесшовности */}
        {images.map((image, index) => (
          <img
            key={`${index}-clone`}
            src={image}
            alt={`Slide clone ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderBlock;
