
import styles from './Block.module.css';
import { Htag } from '../Htag/Htag';

export const Block = () => {
  return (
    <div className={styles.block}>
      {/* Левая колонка */}
      <div className={styles.leftColumn}>
        <div className={styles.block4}><img src="/50M.svg" alt="50M" className="svgImage" /></div>
      </div>

      {/* Правая колонка */}
      <div className={styles.rightColumn}>
        <div className={styles.row}>
        <div className={styles.block5}><img src="/Group 127.svg" alt="TurboTon Farm" className="svgImage" /></div>
        </div>
        <div className={styles.row}>
          <Htag tag="xl">Row 2</Htag>
        </div>
        <div className={styles.row}>
          <Htag tag="xl">Row 3</Htag>
        </div>
      </div>
    </div>
  );
};


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

