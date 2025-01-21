import React from 'react';
import styles from './ButtonBlock.module.css';

const ButtonBlock = () => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.button}
        onClick={() => window.open('https://example.com', '_blank')}
      >
        Start Game Now
      </button>
    </div>
  );
};

export default ButtonBlock;
