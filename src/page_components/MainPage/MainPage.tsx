import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
// import Footer from '../../components/Common/Footer/Footer';
import Buttons from '../../components/Buttons/Buttons';
import ImageBlock from '../../components/ImageBlock/ImageBlock';


const MainPage = (): JSX.Element => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000 }} />
      <div className={styles.wrapper}>

        <Buttons />
        <ImageBlock />
      </div>
    </>
  );
};

export default MainPage;
