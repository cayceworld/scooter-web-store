import Header from '../../layout/Header/Header';
import SelectedProduct from "../../features/SelectedProduct/SelectedProduct";
import styles from './Main.module.scss';
import Footer from '../../layout/Footer/Footer';
import AccessoriesList from '../../features/Accessories/AccessoriesList';
import { useState, useEffect } from 'react';

const Main = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };


  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });


  return (
    <div className={styles.Main}>
      <Header isDesktop={isDesktop} />
      <SelectedProduct isDesktop={isDesktop} />
      <AccessoriesList isDesktop={isDesktop} />
      <Footer />
    </div>
  );
}

export default Main;