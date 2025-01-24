import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';

const Card = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardStyle = {
    transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.3}px))`,
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img 
          src="/Profile 1.svg"
          alt="Base Card"
          className={styles.mainImage}
        />
        <div className={styles.cardOverlay} style={cardStyle}>
          <img src="/boost-card-88.png" alt="Boost Card" />
        </div>
      </div>
    </div>
  );
};

export default Card;