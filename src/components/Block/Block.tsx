import { useState, useEffect } from 'react';
import styles from './Block.module.css';

export const Block = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.block}>
      {/* Фоновые тени */}
      <div className={styles.purpleShadow} />
      <div className={styles.blueShadow} />

      {/* Левая колонка */}
      <div className={styles.leftColumn}>
        <div 
          className={styles.iphone} 
          style={{
            transform: `translateY(${-scrollPosition / 10}px)`
          }}
        >
          <img src="/iphone 1.svg" alt="iphone" />
        </div>
        <div className={styles.fifty}>
          <img src="/50M.svg" alt="50M" />
        </div>
      </div>

      {/* Правая колонка */}
      <div className={styles.rightColumn}>
        <div className={styles.row1}>
          <img src="/Group 127.svg" alt="TurboTon Farm" />
        </div>
        <div className={styles.row2}>
          <img 
            src="/Collect more stardust and take a part in distribution of 50 M TurboTON tokens.svg" 
            alt="TurboTon Farm" 
          />
          <img src="/Frame 2087326523.svg" alt="Button" style={{ marginTop: '20px' }} />
        </div>
        <div className={styles.row3}>
          {/* Место для дополнительного контента */}
        </div>
      </div>

      {/* Ракета */}
      <div className={styles.rocket}>
        <img src="/Group 28.svg" alt="Rocket" />
      </div>
    </div>
  );
};

export default Block;


// export const Block = () => {
//   return (
//     <div className={styles.block}>
//     <div className={styles.block6}><Htag tag='xl'>{"Offcial Links"}</Htag></div>
//     <div className={styles.block1}><Htag tag='xl'>{"Offcial Links"}</Htag></div>
//     <div className={styles.block3}><Htag tag='xl'>{"Offcial Links"}</Htag></div>
//     {/* <div className={styles.block4}><img src="/50M.svg" alt="50M" className="svgImage" /></div> */}
//     <div className={styles.block5}><Htag tag='xl'>{"Offcial Links"}</Htag></div>
//     <div className={styles.phone}><Htag tag='xl'>{"Offcial Links"}</Htag></div>

// </div>
//   );
// }

