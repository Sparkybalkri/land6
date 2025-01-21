import React from "react";
import styles from "./PrimaryContainer.module.css";
import Slider from "./Slider/Slider";

const PrimaryContainer: React.FC = () => {
  return (
    <div className={styles.primaryContainer}>
      {/* Слайдер */}
      <Slider />

      {/* Кнопка Play in Telegram */}
      <div className={styles.buttonContainer}>
        <button className={styles.telegramButton}>Play in Telegram</button>
      </div>

      {/* Футер */}
      <div className={styles.footer}>
        <h2>Welcome to the Fam! 🐸💕</h2>
        <div className={styles.socialIcons}>
          <img src="Group 195.png" alt="Telegram" />
          <img src="Group 193.png" alt="Discord" />
          <img src="Group 196.png" alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryContainer;
