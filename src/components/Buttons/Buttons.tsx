import styles from './Buttons.module.css';

export default function Buttons() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftButtons}>
        <a 
          href="https://turboton.meme/#about"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.button}>
            <span>TurboTON Memecoin</span>
          </div>
        </a>
        
        <a 
          href="https://example.com/farm"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.button}>
            <span>TurboTON Farm</span>
          </div>
        </a>

        <a 
          href="https://turboton.meme/files/TurboTON-Whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.button}>
            <span>Whitepaper</span>
          </div>
        </a>
      </div>

      <div className={styles.rightButton}>
      <a 
    href="https://ston.fi/turboton"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.button1}
  >
    <img 
      src="/Frame3.svg"  // путь к вашему изображению
      alt="Buy on STON.fi"
      className={styles.buttonImage1}
    />
  </a>
</div>
    </div>
  );
}



