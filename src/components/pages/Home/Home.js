import Header from '../../views/Header/Header';
import SelectedProduct from "../../features/SelectedProduct/SelectedProduct";
import styles from './Home.module.scss'; 

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <SelectedProduct />
    </div>
  );
}

export default Home;