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

  const boostTagStyle = {
    transform: `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`,
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
          <img src="/max-holder-card.png" alt="Boost Card" />
        </div>
        <div className={styles.boostTag} style={boostTagStyle}>
          <div className="text-white">
            <div className="flex flex-col">
              <span className="text-sm">You're holding:</span>
              <span className="text-lg">157 489.96 TurboTON</span>
              <div className="text-3xl font-bold">+1000%</div>
              <span>Max Holder Farming Boost</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;