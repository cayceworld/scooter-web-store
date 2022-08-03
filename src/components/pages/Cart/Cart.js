import CartProducts from '../../features/CartProducts/CartProducts';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCartProducts } from '../../../redux/cartRedux';
import { addOrder, getOrders } from '../../../redux/ordersRedux';
import { useState } from 'react';
import { updateAmountKickscooterRequest } from '../../../redux/kickscooterRedux';
import { updateAmountAccessoryRequest } from '../../../redux/accessoriesRedux';
import shortid from 'shortid';

const Cart = () => {


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');


  const cart = useSelector(getCartProducts);
  const orders = useSelector(getOrders);
  const dispatch = useDispatch();


  const submit = e => {
    e.preventDefault();
    dispatch(addOrder({ items: cart, userInfo: [name, phone, address], id: shortid.generate() }));
    dispatch(clearCart());
    cart.map(item => {
      if (item.category == 'kickscooter') {
        dispatch(updateAmountKickscooterRequest({ id: item.id, inStock: item.inStock - item.amount }));
      } else if (item.category == 'accessory') {
        dispatch(updateAmountAccessoryRequest({ id: item.id, inStock: item.inStock - item.amount }));
      }
    })
  }






  return (
    <div className={styles.cart}>
      <div className={styles.container}>

        <div>
          <h3 className={styles.cart__title}>Products in your Cart:</h3>
          <CartProducts />
          {cart.length > 0 && <form className={styles.cart__form}>
            <h3 className={styles.cart__title}>Delivery information:</h3>
            <label>
              <div>Name:</div>
              <input type="text" name="name" className={styles.cart__input} value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
              <div>Phone:</div>
              <input type="tel" name="tel" className={styles.cart__input} value={phone} onChange={e => setPhone(e.target.value)} />
            </label>
            <label>
              <div>Address:</div>
              <input type="text" name="address" className={styles.cart__input} value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <button className={styles.btn} onClick={submit}> submit order</button>
          </form>}
        </div>

      </div>

    </div>);
}

export default Cart;