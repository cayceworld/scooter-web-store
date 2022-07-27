import CartProducts from '../../features/CartProducts/CartProducts';
import styles from './Cart.module.scss';

const Cart = () => {
  return ( 
  <div className={styles.cart}> 
    <div className={styles.container}>
      <h3 className={styles.cart__title}>Products in your Cart:</h3>
      <CartProducts />
    </div>
  </div> );
}
 
export default Cart;