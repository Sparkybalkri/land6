import React from "react";
import styles from "./PrimaryContainer.module.css";
import Slider from "./Slider/Slider";
import TextBlockw from './TextBlockw/TextBlockw';
import { LinksBlock } from '../../components/LinksBlock/LinksBlock';

const PrimaryContainer: React.FC = () => {
  return (
    <div className={styles.primaryContainer}>
      {/* Слайдер */}
      <TextBlockw />
      <Slider />
      
      {/* Кнопка Play in Telegram */}
      <div className={styles.buttonContainer}>
    <a href="https://t.me/turboton_farm_bot" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.button}
  >
    <img 
      src="/Frame 2087326523.svg" 
      alt="Play in Telegram" 
      className={styles.buttonImage}
    />
  </a>
      </div>

      <div className={styles.footer}>
        <h2>Welcome to the Fam! 🐸💕</h2>
        {/* <div className={styles.socialIcons}>
          <img src="Group 195.png" alt="Telegram" />
          <img src="Group 193.png" alt="Discord" />
          <img src="Group 196.png" alt="Twitter" />
        </div> */}
      </div> 
    <LinksBlock/>
    </div>
  );
}; 

export default PrimaryContainer;
