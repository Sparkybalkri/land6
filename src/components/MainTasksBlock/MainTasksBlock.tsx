import { useState, useEffect } from 'react';
import styles from './MainTasksBlock.module.css';

const MainTasksBlock = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <div className={styles.leftColumn}>
          <div className={styles.textContent}>
            <img src="/Frame 2087326519.svg" alt="TurboTon Farm" className={styles.svgImage} />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <div className={styles.contentWrapper}>
            <img 
              src="/bg-tasks.svg" 
              alt="Tasks Background" 
              className={styles.tasksBackground}
              style={{
                transform: `translateY(${0 - scrollPosition / 10}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
            <div className={styles.gecko}>
              <img src="/Group 25.svg" alt="TurboTon Farm" className={styles.svgImage} />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn} />
      </div>

    </div>
  );
};

export default MainTasksBlock;