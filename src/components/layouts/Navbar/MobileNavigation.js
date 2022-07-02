import NavLinks from "./NavLinks";
import styles from './Navbar.module.scss';
import { TbMenu2 } from 'react-icons/tb';
import { useState } from "react";


const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.MobileNavigation}>
      <TbMenu2 onClick={() => setOpen(!open)} className={styles.Hamburger} size='40px' color='white' />
      {open && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;