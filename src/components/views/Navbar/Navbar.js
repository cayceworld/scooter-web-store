import styles from './Navbar.module.scss'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbar__wrapper}>
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}

export default Navbar;