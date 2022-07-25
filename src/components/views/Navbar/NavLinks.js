import styles from './Navbar.module.scss';

const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <li className={styles.navlinks__item}><a href="/" className={styles.navlinks__link} data-scroll>MAIN</a></li>
      <li className={styles.navlinks__item}><a href="#" className={styles.navlinks__link} data-scroll>SHIPPING AND PAYMENT</a></li>
      <li className={styles.navlinks__item}><a href="#" className={styles.navlinks__link} data-scroll>WHOLESALE</a></li>
      <li className={styles.navlinks__item}><a href="#" className={styles.navlinks__link} data-scroll>BLOG</a></li>
      <li className={styles.navlinks__item}><a href="#" className={styles.navlinks__link} data-scroll>CONTACTS</a></li>
    </ul>
  );
}

export default NavLinks;