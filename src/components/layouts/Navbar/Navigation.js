import NavLinks from "./NavLinks";
import styles from './Navbar.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
      
    </nav>
  );
}

export default Navigation;