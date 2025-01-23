import styles from './Buttons.module.css';

export default function Buttons() {
  return (
    <div className={styles.gridContainer}>
      {/* Кнопки с текстом */}
      <a 
        href="https://example.com/memecoin"
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
        href="https://example.com/whitepaper"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.button}>
          <span>Whitepaper</span>
        </div>
      </a>

      {/* Кнопка с изображением */}
      <a 
        href="https://example.com/buy"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div className={styles.button}>
          <img 
            src="/Frame 2087326253.svg" 
            alt="Buy on STON.fi" 
            className={styles.imageButton} 
          />
        </div>
      </a>
    </div>
  );
}



