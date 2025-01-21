import React from 'react';
import styles from './MainPageBlock.module.css';
import TextBlock from './TextBlock/TextBlock';
import SliderBlock from './SliderBlock/SliderBlock';
import ButtonBlock from './ButtonBlock/ButtonBlock';

const MainPageBlock = () => {
  return (
    <div className={styles.mainContainer}>
      <TextBlock />
      <SliderBlock />
      <ButtonBlock />
    </div>
  );
};

export default MainPageBlock;
