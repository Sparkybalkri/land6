import styles from './SubBlockLeft.module.css';

const SubBlockLeft = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Complete</span>
        <span>In-Game Tasks</span>
        <span>and Get Bonus </span>
        <span> Stardust</span>
      </h1>
      <p className={styles.text3}>
      <span>There are different types of Tasks in game. By completing</span> 
      </p>
      <p className={styles.text4}>
      <span>tasks you can increase your Stardust points or increase your Farming speed. </span>
      </p>
      <p className={styles.text1}>
      <span>Also you can find tasks with a drawing of cash prizes and</span> 
      </p>
      <p className={styles.text2}>
      <span> increase your chances to win more.</span>
      </p>
    
    </div>
  
  );
};
export default SubBlockLeft;






