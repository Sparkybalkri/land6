import React from 'react';
import styles from './MainFarmBlock.module.css';
import ScrollEffectBlock from './ScrollEffectBlock/ScrollEffectBlock';
import RightColumn from './RightColumn/RightColumn';

const MainFarmBlock = () => {
  return (
    <div className={styles.mainContainer}>
      
      <div className={styles.gridContainer}>
      <ScrollEffectBlock />
        <RightColumn />

      </div>
    </div>
  );
};

export default MainFarmBlock;
