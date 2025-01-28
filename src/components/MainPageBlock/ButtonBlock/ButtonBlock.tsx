import React from 'react';
import styles from './ButtonBlock.module.css';
import { useRouter } from 'next/router';
import { Button } from '../../../components/Button/Button';

const ButtonBlock = () => {
  const router = useRouter();

  return (
    <div className={styles.buttonContainer}>
      <Button text='Play in Telegram' size='l' type='primary'
        onClick={() => router.push('https://t.me/turboton_farm_bot')} />
    </div>
  );
};

export default ButtonBlock;
