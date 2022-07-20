import styles from './NavIcons.module.scss';
import clsx from 'clsx'

const NavIcons = () => {
  return (
    <ul className={styles.navicons}>
      <li className={styles.navicons__item}>
        <a href="#" className={styles.navicons__number}>+1 (888) 888-88-88</a>
        <img className={clsx(styles.navicons__img, styles.navicons__img_phone)} src={`${process.env.PUBLIC_URL}/images/phone.svg`} />
      </li>
      <li className={styles.navicons__item}>
        <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/instagram.svg`} />
      </li>
      <li className={styles.navicons__item}>
        <img className={styles.navicons__img} src={`${process.env.PUBLIC_URL}/images/cart.svg`} />
      </li>
    </ul>
  );
}

export default NavIcons;