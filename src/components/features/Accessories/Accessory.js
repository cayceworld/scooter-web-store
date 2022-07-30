import styles from './AccessoriesList.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToCart, getCartProducts, addAmount } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

const Accessory = props => {

  const cart = useSelector(getCartProducts);
  const accessory = props;


  const dispatch = useDispatch();

  const addProduct = () => {

    if (cart.length == 0) {
      dispatch(addToCart({
        title: accessory.title, id: accessory.id,
        image: accessory.image, price: accessory.price, category: 'accessory', amount: 1
      }))
    } else {
      const filterCart = cart.find(item => item.id == accessory.id);

      if (filterCart == undefined) {
        dispatch(addToCart({
          title: accessory.title, id: accessory.id,
          image: accessory.image, price: accessory.price, category: 'accessory', amount: 1
        }))
        console.log('onemore')
      } else if (filterCart.amount <= 9) {
        dispatch(addAmount({ id: accessory.id, amount: 1 }))
        console.log('onemore')
      }
    }
  }




  return (
    <div className={styles.Accessory} >
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${accessory.image}`} /></div>
      <div className={styles.Accessory__title}>{accessory.title}</div>
      <div className={styles.Accessory__description}>{accessory.description}</div>
      <div className={styles.Accessory__price}>${accessory.price}</div>
      <div className={styles.Accessory__button}>

        <button onClick={addProduct} className={clsx(styles.btn, accessory.inStock <= 0 && styles.btn_disabled)}>
          add to card
        </button>
      </div>
    </div>
  );
}

export default Accessory;