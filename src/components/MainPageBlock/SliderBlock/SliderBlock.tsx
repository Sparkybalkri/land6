// SliderBlock.tsx
import React, { useState, useEffect } from 'react';
import styles from './SliderBlock.module.css';
import Image, { ImageLoader } from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageType {
  src: string | StaticImageData;
  className: string;
  draggable: boolean;
  loader: ImageLoader;
  alt: string;
  width: number;
  height: number;
  unoptimized: boolean;
}

const images: ImageType[] = [
  {
    src: '/image1.webp',
    className: styles.image,
    draggable: false,
    loader: () => '/image1.webp',
    alt: 'ai image 1',
    width: 1,
    height: 1,
    unoptimized: true
  },
  {
    src: '/image2.webp',
    className: styles.image,
    draggable: false, 
    loader: () => '/image2.webp',
    alt: 'ai image 2',
    width: 1,
    height: 1,
    unoptimized: true
  },
  {
    src: '/image3.webp',
    className: styles.image,
    draggable: false,
    loader: () => '/image3.webp',
    alt: 'ai image 3', 
    width: 1,
    height: 1,
    unoptimized: true
  },
  {
    src: '/image4.webp',
    className: styles.image,
    draggable: false,
    loader: () => '/image4.webp',
    alt: 'ai image 4',
    width: 1,
    height: 1,
    unoptimized: true
  },
  {
    src: '/image5.webp',
    className: styles.image,
    draggable: false,
    loader: () => '/image5.webp',
    alt: 'ai image 5',
    width: 1,
    height: 1,
    unoptimized: true
  }
 ];

// const images = [
//   '/image1.png',
//   '/image2.png',
//   '/image3.png',
//   '/image4.png',
//   '/image5.png',
// ];


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
    <Image
      key={`image-${index}`}
      src={image.src}
      className={image.className}
      draggable={image.draggable}
      loader={image.loader}
      alt={image.alt}
      width={image.width}
      height={image.height}
      unoptimized={image.unoptimized}
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
