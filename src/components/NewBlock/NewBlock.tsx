import { useState, useEffect, useRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './NewBlock.module.css';
import { Htag } from '../Htag/Htag';
import Image from 'next/image';


const NewBlock: React.FC = () => {
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
        <div className={styles.newBlock}>
            <div className={styles.conrainer}>
                <div className={styles.textDiv}>
                    <Htag tag='xxl' className={styles.title}>
                        {'Complete In-Game Tasks and Get Bonus Stardust'}
                    </Htag>
                    <Htag tag='l'>
                        {'There are different types of Tasks in game. By completing tasks you can increase your Stardust points or increase your Farming speed.'}
                    </Htag>
                    <Htag tag='l'>
                        {'Also you can find tasks with a drawing of cash prizes and increase your chances to win more. testament to innovation and collaboration. '}
                    </Htag>
                </div>
                <Image className={styles.geckoImage} draggable="false"
                    loader={() => '/Group 25.svg'}
                    src='/Group 25.svg'
                    alt='gecko image'
                    width={1}
                    height={1}
                    unoptimized={true}
                />
                <Image className={styles.tasksImage} draggable="false"
                    loader={() => '/bg-tasks.svg'}
                    src='/bg-tasks.svg'
                    alt='tasks image'
                    width={1}
                    height={1}
                    unoptimized={true}
                    style={{
                        transform: `translate(0%, calc(${-scrollPosition * 0.07}px))`,
      
                      }}
                />
            </div>
        </div>
    );
};

export default NewBlock;