// SliderBlock.tsx
import React, { useState, useEffect } from 'react';
import styles from './SliderBlock.module.css';

const images = [
  '/image1.webp',
  '/image2.webp',
  '/image3.webp',
  '/image4.webp',
  '/image5.webp',
];

const helmets = [
  '/helm-zero.svg',
  '/helm-bronze.svg',
  '/helm-silver.svg',
  '/helm-gold.svg',
  '/helm-diamond.svg',
];

const rankTexts = [
  '/Zero Rank.svg',
  '/Bronze Rank.svg',
  '/Silver Rank.svg',
  '/Golden Rank.svg',
  '/Diamond Rank.svg',
];

const SliderBlock = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showHelmet, setShowHelmet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHelmet(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setShowHelmet(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
    {/* Добавляем фоновое изображение */}
    <img 
      src="/Ellipse 118 (1).svg" // Путь к вашему изображению затемнения
      alt="Background"
      className={styles.backgroundImage}
    />
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slideContainer}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
            {index === currentImage && (
              <>
                <img
                  src={helmets[currentImage]}
                  alt={`Helmet ${index + 1}`}
                  className={`${styles.helmet} ${showHelmet ? styles.helmetVisible : ''}`}
                />
                <img
                  src={rankTexts[currentImage]}
                  alt={`Rank ${index + 1}`}
                  className={`${styles.rankText} ${showHelmet ? styles.rankTextVisible : ''}`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SliderBlock;


