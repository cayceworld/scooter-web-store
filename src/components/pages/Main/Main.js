import Header from '../../layout/Header/Header';
import SelectedProduct from "../../features/SelectedProduct/SelectedProduct";
import styles from './Main.module.scss';
import AccessoriesList from '../../features/Accessories/AccessoriesList';
import { useSelector } from 'react-redux';
import { getDevice } from '../../../redux/deviseRedux';
import ProductsList from "../../features/ProductsList/ProductsList";

const Main = () => {

  const device = useSelector(getDevice);
  const isDesktop = device.isDesktop;

  //console.log('isDesktop', isDesktop);



  return (
    <div className={styles.Main}>
      <ProductsList />
      <SelectedProduct />
      <AccessoriesList />
    </div>
  );
}

export default Main;