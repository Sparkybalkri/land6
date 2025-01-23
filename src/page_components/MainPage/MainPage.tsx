import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
// import Footer from '../../components/Common/Footer/Footer';
import Buttons from '../../components/Buttons/Buttons';
import ImageBlock from '../../components/MainContentBlock/ImageBlock/ImageBlock';
import RocketLogoBlock from '../../components/MainContentBlock/RocketLogoBlock/RocketLogoBlock';
import PhoneBlock from '../../components/MainContentBlock/PhoneBlock/PhoneBlock';
import FiftyMBlock from "../../components/MainContentBlock/FiftyMBlock/FiftyMBlock";
// import LinksBlock from '../../components/MainContentBlock/LinksBlock/LinksBlock';
import MainTaskBlock from '../../components/MainTaskBlock/MainTaskBlock';
import MainPageBlock from '../../components/MainPageBlock/MainPageBlock';
import MainFarmBlock from '../../components/MainFarmBlock/MainFarmBlock';
import PrimaryContainer from '../../components/PrimaryContainer/PrimaryContainer';
import MainContentBlock from '../../components/MainContentBlock/MainContentBlock';
import {Block} from '../../components/Block/Block';
import { LinksBlock } from '../../components/LinksBlock/LinksBlock';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000 }} />
      <div className={styles.parentContainer}>
        
      <Buttons />
        <Block />
        <LinksBlock/>
       
        {/* <ImageBlock />
        <RocketLogoBlock /> 
        <PhoneBlock />
        <FiftyMBlock /> */}
        {/* <LinksBlock />  */}
         <MainTaskBlock />
        <MainPageBlock />
        <MainFarmBlock/>
        <PrimaryContainer/> 
      
      </div>
    </>
  );
};

export default MainPage;
