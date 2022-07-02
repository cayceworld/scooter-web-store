import styles from './ProductList.module.scss';
import { useSelector } from "react-redux";
import { getAllKickscooters } from "../../../redux/kickscooterReducer";
import Product from './Product';


const ProductList = props => {
  const kickscooters = useSelector(getAllKickscooters);


  console.log(kickscooters)

  return (
    <div className={styles.Products}>
      <div className={styles.container}>
        <div className={styles.products__wrapper}>
          {kickscooters.map(kickscooter =>
            <Product key={kickscooter.id} id={kickscooter.id} title={kickscooter.title} image={kickscooter.image} isSelect={kickscooter.isSelect} />
          )}
        </div>
      </div>
      <div className={styles.products__subtitle}>Free 1 day shipping within California.</div>
    </div >
  );
}

export default ProductList;