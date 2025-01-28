import { useState, useEffect, useRef } from 'react';
import styles from './MainTasksBlock.module.css';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  isVisible: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, isVisible }) => {
  return (
    <span className={styles.textWrapper}>
      {text.split('').map((char: string, index: number) => (
        <span
          key={index}
          className={`${styles.character} ${isVisible ? styles.visible : ''}`}
          style={{ 
            animationDelay: `${delay + index * 0.01}s`,
            whiteSpace: 'pre'  
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const MainTasksBlock: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollPosition(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainSection}>
        <div className={styles.leftColumn}>
          <div className={styles.textContent} ref={textRef}>
            <h1 className={styles.title}>
              <TypewriterText 
                text="Complete In-Game"
                delay={0.02}
                isVisible={isVisible}
              />
              <TypewriterText 
                text="Tasks and Get Bonus"
                delay={0.02}
                isVisible={isVisible}
              />
              <TypewriterText 
                text="Bonus Stardust"
                delay={0.03}
                isVisible={isVisible}
              />

            </h1>
            <p className={styles.description}>
  <TypewriterText 
    text="There are different types of Tasks in game. By completing tasks you"
    delay={0.01}
    isVisible={isVisible}
  />
</p>
<p className={styles.description}>
  <TypewriterText 
    text="can increase your Stardust points or increase your Farming speed."
    delay={0.01}
    isVisible={isVisible}
  />
</p>
<p className={`${styles.description} ${styles.secondParagraph}`}>
  <TypewriterText 
    text="Also you can find tasks with a drawing of cash prizes and increase"
    delay={0.5}
    isVisible={isVisible}
  />
</p>
<p className={styles.description}>
  <TypewriterText 
    text="your chances to win more."
    delay={0.5}
    isVisible={isVisible}
  />
</p>
          </div>
        </div>
        <div className={styles.middleColumn}>
          <div className={styles.contentWrapper}>
            <img 
              src="/bg-tasks.svg" 
              alt="Tasks Background" 
              className={styles.tasksBackground}
              style={{
                transform: `translate(-0%, calc(-2% + ${-scrollPosition * 0.08}px))`,
                
              }}
            />
                      <div className={styles.contentWrapper}>
            <img 
              src="/bg-tasks.svg" 
              alt="Tasks Background" 
              className={styles.tasksBackground1}
              style={{
                transform: `translate(-0%, calc(-23% + ${-scrollPosition * 0.08}px))`,
                
              }}
            />
            <div className={styles.gecko}>
              <img src="/Group 25.svg" alt="TurboTon Farm" className={styles.svgImage} />
            </div>
          </div>
        </div>
        <div className={styles.rightColumn} />
      </div>
      </div>
    </div>
  );
};

export default MainTasksBlock;