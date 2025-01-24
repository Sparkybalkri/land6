import React, { useEffect, useState } from 'react';
import styles from './ScrollEffectBlock.module.css';

const ScrollEffectBlock: React.FC = () => {
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
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src="/Frens.png"
          alt="Base Card"
          className={styles.backgroundImage}
        />
        <div className={styles.cardOverlay} style={cardStyle}>
          <img src="/card-bg.png" alt="Card" />
        </div>
        <div className={styles.boostTag} style={boostTagStyle}>
          <div className="text-white">
            <div className="flex justify-between items-center">
              <span>Farming Boost from Frens</span>
              <span>+88%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollEffectBlock;