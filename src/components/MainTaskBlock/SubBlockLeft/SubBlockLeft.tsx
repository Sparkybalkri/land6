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
      <p className={styles.text}>
      <span>There are different types of Tasks in game. By completing</span> 
      </p>
      <p className={styles.text}>
      <span>tasks you can increase your Stardust points or increase your Farming speed. </span>
      </p>
      <p className={styles.text}>
      <span>Also you can find tasks with a drawing of cash prizes and</span> 
      <span> increase your chances to win more.</span>
      </p>
    
    
    </div>
  
  );
};
export default SubBlockLeft;






