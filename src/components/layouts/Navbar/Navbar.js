import styles from './Navbar.module.scss'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import NavIcons from './NavIcons';

const Navbar = () => {


  return (
    <div className={styles.Navbar}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.container}>
          <Navigation />
          <MobileNavigation />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;