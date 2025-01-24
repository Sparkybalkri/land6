
import React, { useEffect, useState } from 'react';
import styles from './MainBlock.module.css';

const MainBlock = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const boostStyle = {
    transform: `translate(-50%, ${-scrollPosition * 0.3}px)`,
  };

  const avatarStyle = {
    transform: `translateY(${-scrollPosition * 0.3}px)`,
  };
  
  
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        {/* Левая колонка */}
        <div className={styles.column}>
          
        <div className={styles.textContainer}>
            <img 
              src="/Person.svg" 
              alt="Person Icon" 
              className={styles.icon}
            />
            <img 
              src="/Invite your Frens2.svg" 
              alt="Invite your Frens" 
              className={styles.title}
            />
            <img 
              src="/Invite more Frens and Get more Farming Boost. More Farming Boost — more TurboTON tokens you will receive in the end of a game2.svg" 
              alt="Invite more Frens and Get more Farming Boost" 
              className={styles.description}
            />
          </div>
          
          <div className={styles.cardContainer}>
            {/* Оверлей с аватарами */}
            <div className={styles.avatarOverlay}>
              <img 
                src="/img-avatars.svg" 
                alt="Avatars" 
                className={styles.avatarsImage}
                style={avatarStyle}
              />
            </div>
            
            <img 
              src="/Список друзей 1.svg" 
              alt="Frens Card" 
              className={styles.baseCard}
            />
            <div className={styles.boostCard} style={boostStyle}>
              <img 
                src="/234.svg" 
                alt="Boost 88%" 
                className={styles.boostImage}
              />
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className={styles.column}>
        <div className={styles.textContainer}>
            <img 
              src="/Subtract1.svg" 
              alt="Person Icon" 
              className={styles.icon2}
            />
            <img 
              src="/Buy Token and Boost.svg" 
              alt="Invite your Frens" 
              className={styles.title}
            />
            <img 
              src="/Upgrade your ship buying Tokens. Become the Farming Leader among your Frens. Increase your chance to get more TurboTON tokens2.svg" 
              alt="Invite more Frens and Get more Farming Boost" 
              className={styles.description}
            />
          </div>
          <div className={styles.cardContainer}>
            <img 
              src="/Profile2.svg" 
              alt="Player Card" 
              className={styles.baseCard}
            />
            <div className={styles.rightBoostCard} style={boostStyle}>
              <img 
                src="/Group 150.svg" 
                alt="Boost 1000%" 
                className={styles.boostImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;