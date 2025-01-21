
import React from 'react';
import styles from './RocketLogoBlock.module.css';

// Интерфейс для описания свойств изображения
interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

// Основной компонент
const RocketLogoBlock: React.FC = () => {
  // Массив с изображениями
  const images: ImageProps[] = [
    { src: '/rocket.png', alt: 'Rocket', width: '501.23px', height: '382.31px' },
    { src: '/TurboFarm-logo.png', alt: 'TurboTON Farm Logo', width: '408px', height: '148.29px' },
  ];

  return (
    <div className={styles.container}>
      {/* Блок изображений */}
      <div className={styles.images}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: image.width, height: image.height }}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RocketLogoBlock;



