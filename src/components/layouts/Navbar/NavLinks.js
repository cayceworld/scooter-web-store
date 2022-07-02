import styles from './Navbar.module.scss';

const NavLinks = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}><a href="#" className={styles.menu__item_link} data-scroll>REVIEWS</a></li>
      <li className={styles.menu__item}><a href="#" className={styles.menu__item_link} data-scroll>SHIPPING AND PAYMENT</a></li>
      <li className={styles.menu__item}><a href="#" className={styles.menu__item_link} data-scroll>WHOLESALE</a></li>
      <li className={styles.menu__item}><a href="#" className={styles.menu__item_link} data-scroll>BLOG</a></li>
      <li className={styles.menu__item}><a href="#" className={styles.menu__item_link} data-scroll>CONTACTS</a></li>
    </ul>
  );
}

export default NavLinks;