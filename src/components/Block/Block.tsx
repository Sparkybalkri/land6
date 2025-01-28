import { useState, useEffect } from 'react';
import styles from './Block.module.css';
import Buttons from '../Buttons/Buttons';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import { Header } from '../../components/HeaderComponents/Header/Header';
import Vector3 from './Vector3.svg';
import Vector4 from './Vector4.svg';
import Logo from './Group1234.svg';
import { Htag } from '../Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from '@/helpers/locale.helper';
import { Button } from '../Button/Button';
import Image from 'next/image';


export const Block = () => {
  const router = useRouter();
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
      <Header />
      <Vector3 className={styles.cyanShadow} />
      <Vector4 className={styles.purpleShadow} />
      <div className={styles.cointainer}>
        <div className={styles.leftBlock}>
          <Image className={styles.fiftyImage} draggable="false"
            loader={() => '/50M.webp'}
            src='/50M.webp'
            alt='main 50 image'
            width={1}
            height={1}
            unoptimized={true}
          />
          <Image className={styles.phoneImage} draggable="false"
              loader={() => '/iphone(3).webp'}
              src='/iphone(3).webp'
              alt='main phone image'
              width={1}
              height={1}
              unoptimized={true}
            />
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.logoDiv}>
            <Image className={styles.lizardImage} draggable="false"
              loader={() => '/Group328.webp'}
              src='/Group328.webp'
              alt='main lizard image'
              width={1}
              height={1}
              unoptimized={true}
            />
              <Image className={styles.turbo} draggable="false"
              loader={() => '/Group12.webp'}
              src='/Group12.webp'
              alt='main lizard image'
              width={1}
              height={1}
              unoptimized={true}
            />
          </div>
          <div className={styles.text}>
          <Htag tag='xl'>
            {setLocale(router.locale).collect_more_stardust}
          </Htag>
          </div>
          <Button className={styles.blockButton} text={setLocale(router.locale).play_in_telegram} type='primary'
            size='l' isIcon={true}  onClick={() => window.open('https://t.me/turboton_farm_bot', '_blank')} />
        </div>
      </div>
      <LinksBlock />
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

