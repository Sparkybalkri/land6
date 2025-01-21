import styles from './SubBlockRight.module.css';

const SubBlockRight = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.imageContainer}>
        <img src="/Group 25.png" alt="Gecko" className={styles.image} />
      </div>
      <div className={styles.tasksContainer}>
        <img src="/bg-tasks (1).png" alt="Tasks" className={styles.tasksImage} />
      </div>
    </div>
  );
};

export default SubBlockRight;
