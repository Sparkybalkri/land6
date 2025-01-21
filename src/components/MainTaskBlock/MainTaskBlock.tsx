import styles from './MainTaskBlock.module.css';
import SubBlockLeft from './SubBlockLeft/SubBlockLeft';
import SubBlockRight from './SubBlockRight/SubBlockRight';

const MainTaskBlock = () => {
  return (
    <div className={styles.mainContainer}>
      <SubBlockLeft />
      <SubBlockRight />
    </div>
  );
};

export default MainTaskBlock;

