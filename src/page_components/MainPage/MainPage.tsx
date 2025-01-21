import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
// import Footer from '../../components/Common/Footer/Footer';
import Buttons from '../../components/Buttons/Buttons';
import ImageBlock from '../../components/ImageBlock/ImageBlock';
import RocketLogoBlock from '../../components/RocketLogoBlock/RocketLogoBlock';
import PhoneBlock from '../../components/PhoneBlock/PhoneBlock';
import FiftyMBlock from "../../components/FiftyMBlock/FiftyMBlock";
import LinksBlock from '../../components/LinksBlock/LinksBlock';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000 }} />
      <div className={styles.parentContainer}>

        <Buttons />
        <ImageBlock />
        <RocketLogoBlock /> 
        <PhoneBlock />
        <FiftyMBlock />
        <LinksBlock />
      </div>
    </>
  );
};

export default MainPage;
