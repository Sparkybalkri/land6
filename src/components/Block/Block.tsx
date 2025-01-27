import { useState, useEffect } from 'react';
import styles from './Block.module.css';
import Buttons from '../Buttons/Buttons';
import {LinksBlock} from '../LinksBlock/LinksBlock';
import { Header } from '../../components/HeaderComponents/Header/Header';

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
      <div className={styles.container}>
        <Header/>
          {/* <Buttons /> */}
        
        
        {/* Тени */}
        <img src="/Vector3.svg" alt="Cyan shadow" className={styles.cyanShadow} />
        <img src="/Vector4.svg" alt="Purple shadow" className={styles.purpleShadow} />
        
        <div className={styles.content}>
          <div className={styles.leftSide}>
            {/* 50M за телефоном */}
            <div className={styles.fifty}>
              <img src="/50M.svg" alt="50M" />
            </div>
            
            {/* iPhone */}
            <div 
              className={styles.iphone}
              style={{
                transform: `translate(-0%, calc(0% + ${-scrollPosition * 0.1}px))`,
              }}
            >
              <img src="/img-phone (1).webp" alt="iPhone" />
            </div>
          </div>

          <div className={styles.rightSide}>
            {/* Ракета между телефоном и текстом */}
            <div className={styles.rocket}>
              <img src="/Group328.webp" alt="Rocket" />
            </div>

            <div className={styles.textBlock}>
  <img 
    src="/Group 127.svg" 
    alt="TurboTon Farm" 
    className={styles.logo}
  />
  <img 
    src="/Collect more stardust and take a part in distribution of 50 M TurboTON tokens.svg" 
    alt="Description" 
    className={styles.description}
  />
  <a 
    href="https://t.me/turboton_farm_bot" 
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
          </div>
        </div>
        <LinksBlock />
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

