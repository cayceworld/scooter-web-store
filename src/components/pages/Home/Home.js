import Header from '../../layout/Header/Header';
import SelectedProduct from "../../features/SelectedProduct/SelectedProduct";
import styles from './Home.module.scss'; 
import Footer from '../../layout/Footer/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <SelectedProduct />
      <Footer />
    </div>
  );
}

export default Home;