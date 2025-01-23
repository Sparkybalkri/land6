import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <p className={styles.cardText}><img src="/Group 147.svg" alt="Farming Boost" /></p>
      <p className={styles.cardText}><img src="/Profile 1.svg" alt="Farming Boost" /></p>
    </div>
  );
};

export default Card;
