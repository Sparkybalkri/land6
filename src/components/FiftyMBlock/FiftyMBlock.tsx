import styles from "./FiftyMBlock.module.css";

const FiftyMBlock = () => {
  return (
    <div className={styles.container}>
      <img
        src="/50M.png"
        alt="50M Background"
        className={styles.image}
      />
    </div>
  );
};

export default FiftyMBlock;
