import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/card-image.png" alt="Farming Boost" />
      <p className={styles.cardText}></p>
    </div>
  );
};

export default Card;
