import styles from './Buttons.module.css';

export default function Buttons() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftButtons}>
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
      </div>

      <div className={styles.rightButton}>
        <a 
          href="https://example.com/buy"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={`${styles.button} ${styles.imageButton}`}>
            <img 
              src="/Frame 2087326253.svg" 
              alt="Buy on STON.fi" 
            />
          </div>
        </a>
      </div>
    </div>
  );
}



