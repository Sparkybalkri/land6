import React from 'react';
import styles from './TextBlock.module.css';
import { Htag } from '@/components/Htag/Htag';

const TextBlock = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.block5}>
        <Htag tag='xxl'>
          {'Improve your rank and farm more stardust'}
        </Htag>
      </div>
    </div>
  );
};

export default TextBlock;
