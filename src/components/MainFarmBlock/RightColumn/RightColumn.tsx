import React from 'react';
import styles from './RightColumn.module.css';
import Card from '../Card/Card';

const RightColumn = () => {
  return (
    <div className={styles.rightContainer}>
      <Card />
      <p className={styles.text}>Buy tokens to boost your farming!</p>
    </div>
  );
};

export default RightColumn;
