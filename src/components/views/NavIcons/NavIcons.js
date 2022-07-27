import styles from './NavIcons.module.scss';
import clsx from 'clsx'
import Button from '../../common/Button/Button';
import CartProducts from '../../features/CartProducts/CartProducts';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';
import { NavLink } from "react-router-dom";


const NavIcons = () => {

  const cart = useSelector(getCartProducts);
  //console.log('length:', cart.length)

  return (
    <ul className={styles.navicons}>
      <li className={styles.navicons__item}>
        <a href="tel:1 (888) 888-88-88" className={styles.navicons__phone}>+1 (888) 888-88-88</a>
        <a href="tel:1 (888) 888-88-88"><img className={clsx(styles.navicons__img, styles.navicons__img_phone)} src={`${process.env.PUBLIC_URL}/images/phone.svg`} /></a>
      </li>
      <li className={styles.navicons__item}>
        <a href="https://www.instagram.com/" target="blanc">
          <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/instagram.svg`} />
        </a>

      </li>
      <li className={clsx(styles.navicons__item, styles.navicons__cartIco)}>
        <NavLink to="/cart"> <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/cart.svg`} /></NavLink>
        {cart.length > 0 && <div className={styles.navicons__cartQuantity}> {cart.length} </div>}
        <div className={styles.navicons__cartBox}>
          <CartProducts />
          <NavLink to="/cart"><Button children="go to cart" /></NavLink>
        </div>
      </li>
    </ul>
  );
}

export default NavIcons;