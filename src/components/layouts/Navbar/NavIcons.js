import styles from './Navbar.module.scss';

const NavIcons = () => {
  return (
    <ul className={styles.NavIcons}>
      <li className={styles.nav__icon}><img src={`${process.env.PUBLIC_URL}/images/cart.svg`} /></li>
      <li className={styles.nav__icon}><img src={`${process.env.PUBLIC_URL}/images/instagram.svg`} /></li>
      <li className={styles.nav__icon}><a href="#">+1 (888) 888-88-88</a></li>
    </ul>
  );
}

export default NavIcons;