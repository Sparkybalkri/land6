import styles from './GridComponent.module.css';

export default function GridComponent() {
  return (
    <div className={styles.grid}>
      <div className={styles.item}>Item 1</div>
      <div className={styles.item}>Item 2</div>
      <div className={styles.item}>Item 3</div>
      <div className={styles.item}>Item 4</div>
    </div>
  );
}
