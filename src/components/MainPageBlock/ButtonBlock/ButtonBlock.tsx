import React from 'react';
import styles from './ButtonBlock.module.css';

const ButtonBlock = () => {
  return (
    <div className={styles.buttonContainer}>
          <a 
    href="https://t.me/turboton_farm_bot" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.button}
  >
    <img 
      src="/Frame4.svg" 
      alt="Play in Telegram" 
      className={styles.buttonImage}
    />
  </a>
    </div>
  );
};

export default ButtonBlock;
