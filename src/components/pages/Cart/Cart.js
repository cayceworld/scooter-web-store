import CartProducts from '../../features/CartProducts/CartProducts';
import styles from './Cart.module.scss';

const Cart = () => {
  return ( <div className={styles.cart}> 
    <div className={styles.container}>
      <CartProducts />
    </div>
  </div> );
}
 
export default Cart;