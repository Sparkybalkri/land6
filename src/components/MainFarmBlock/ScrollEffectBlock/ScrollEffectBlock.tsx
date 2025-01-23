import React, { useEffect, useState } from 'react';
import styles from './ScrollEffectBlock.module.css';

const ScrollEffectBlock: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonStyle = {
    transform: `translateY(${-scrollPosition * 0.2}px)`, // Коэффициент для медленного движения
    transition: 'transform 0.1s ease-out', // Плавность
  };

  return (
    <div className={styles.container}>
      {/* Левая колонка */}


      {/* левая колонка */}
      <div className={styles.leftColumn}>
        <div className={styles.imageWrapper}>
          <img
            src="/Frens.png"
            alt="Max Holder Farming Boost"
            className={styles.backgroundImage}
          />
          <div className={styles.orangeButton} style={buttonStyle}>
            <img src="/Frame.png" alt="Farming Boost" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollEffectBlock;
