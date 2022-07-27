import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';
import styles from './CartProducts.module.scss';
import shortid from 'shortid';

const CartProducts = () => {

  const cart = useSelector(getCartProducts)
  //console.log(cart.length);

  let sum = 0;

  cart.forEach(item => {
    sum += item.price;
  })

  return (
    <div className={styles.CartProducts}>
      {cart.length <= 0
        ? <div className={styles.CartProducts__empty} >Cart is empty</div>
        : cart.map(item =>
          <div className={styles.CartProducts__item} key={shortid.generate()}>
            <div className={styles.CartProducts__image}>
              {item.category === 'kickscooter' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Kickscooters List/${item.image}`} />}
              {item.category === 'accessory' && <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/Accessories/${item.image}`} />}
            </div>
            <div className={styles.CartProducts__title}> {item.title}</div>
            <div className={styles.CartProducts__price}> ${item.price}</div>
          </div>
        )
      }
      {cart.length > 0 && <div className={styles.CartProducts__totalPrice}>
        <div>Total Price:</div>
        <div>${sum}</div>
      </div>}
    </div>


  );
}

export default CartProducts;