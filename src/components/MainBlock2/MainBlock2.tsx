import React, { useEffect, useState } from 'react';
import styles from './MainBlock2.module.css';
import { Htag } from '../Htag/Htag';
import Image from 'next/image';
import Person from './Person.svg';


const MainBlock2 = () => {



    return (
        <div className={styles.mainBlock2}>
            <div className={styles.mainDiv}>
                <div className={styles.leftDiv}>
                    <Image className={styles.icon} draggable="false"
                        loader={() => '/Person.svg'}
                        src='/Person.svg'
                        alt='friends image'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                    <Htag tag='xl' className={styles.title}>
                        {'Invite your Frens'}
                    </Htag>
                    <Htag tag='m'>
                        {'Invite more Frens and Get more Farming Boost. More Farming Boost — more TurboTON tokens you will receive in the end of a game.'}
                    </Htag>
                    <Image className={styles.image} draggable="false"
                        loader={() => '/Список друзей 1.svg'}
                        src='/Список друзей 1.svg'
                        alt='friends image'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                </div>
                <div className={styles.leftDiv}>
                    <Image className={styles.icon} draggable="false"
                        loader={() => '/Subtract1.svg'}
                        src='/Subtract1.svg'
                        alt='friends image'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                    <Htag tag='xl' className={styles.title}>
                        {'Buy Token and Boost'}
                    </Htag>
                    <Htag tag='m'>
                        {'Upgrade your ship buying Tokens. Become the Farming Leader among your Frens. Increase your chance to get more TurboTON tokens.'}
                    </Htag>
                    <Image className={styles.image} draggable="false"
                        loader={() => '/Profile2.svg'}
                        src='/Profile2.svg'
                        alt='friends image'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainBlock2;