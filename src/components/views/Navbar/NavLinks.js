import styles from './Navbar.module.scss';
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <li className={styles.navlinks__item}><NavLink className={styles.navlinks__link} to='/'>Main</NavLink></li>
      <li className={styles.navlinks__item}><NavLink className={styles.navlinks__link} to='Shipping'>Shipping and Payment</NavLink></li>
      <li className={styles.navlinks__item}><NavLink className={styles.navlinks__link} to='Wholesale'>Wholesale</NavLink></li>
      <li className={styles.navlinks__item}><NavLink className={styles.navlinks__link} to='Blog'>Blog</NavLink></li>
      <li className={styles.navlinks__item}><NavLink className={styles.navlinks__link} to='Contacts'>Contacts</NavLink></li>
    </ul>
  );
}

export default NavLinks;