import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
// import Footer from '../../components/Common/Footer/Footer';
// import Buttons from '../../components/Buttons/Buttons';
import ImageBlock from '../../components/MainContentBlock/ImageBlock/ImageBlock';
import RocketLogoBlock from '../../components/MainContentBlock/RocketLogoBlock/RocketLogoBlock';
import PhoneBlock from '../../components/MainContentBlock/PhoneBlock/PhoneBlock';
import FiftyMBlock from "../../components/MainContentBlock/FiftyMBlock/FiftyMBlock";
// import LinksBlock from '../../components/MainContentBlock/LinksBlock/LinksBlock';
import MainTasksBlock from '../../components/MainTasksBlock/MainTasksBlock';
import MainPageBlock from '../../components/MainPageBlock/MainPageBlock';
// import MainFarmBlock from '../../components/MainFarmBlock/MainFarmBlock';
import PrimaryContainer from '../../components/PrimaryContainer/PrimaryContainer';
import MainContentBlock from '../../components/MainContentBlock/MainContentBlock';
import {Block} from '../../components/Block/Block';
// import { LinksBlock } from '../../components/LinksBlock/LinksBlock';
import MainBlock from '../../components/MainBlock/MainBlock';
import { Header } from '../../components/HeaderComponents/Header/Header';
import NewBlock from '@/components/NewBlock/NewBlock';
import MainBlock2 from '@/components/MainBlock2/MainBlock2';


const MainPage = (): JSX.Element => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} toastOptions={{ duration: 2000 }} />
      <div className={styles.parentContainer}>
        {/* <LinksBlock/> */}
        {/* <ImageBlock />
        <RocketLogoBlock /> 
        <PhoneBlock />
        <FiftyMBlock /> */}
        {/* <LinksBlock />   */}
        <Block />
         {/* <MainTasksBlock/> */}
         <NewBlock />
        <MainPageBlock />
        <MainBlock2 />
        <PrimaryContainer/>  
        {/* <LinksBlock/> */}
      </div>
    </>
  );
};

export default MainPage;
