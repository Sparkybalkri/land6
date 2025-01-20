import React from 'react';
import styles from './ImageBlock.module.css';

const ImageBlock = () => {
  return (
    <div className={styles.container}>
      <img 
        src="/TurboFarm-logo.png" 
        alt="TurboTON Farm Logo" 
        className={styles.image} 
      />
    </div>
  );
};

export default ImageBlock;

