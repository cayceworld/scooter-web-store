import NavLinks from "./NavLinks";
import styles from './Navbar.module.scss';
import { TbMenu2 } from 'react-icons/tb';
import { useState, useEffect } from "react";
import NavIcons from "../NavIcons/NavIcons";
import Logo from "../../common/Logo/Logo";
import clsx from 'clsx';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);


  return (
    <nav className={styles.MobileNavigation}>
      <TbMenu2 onClick={() => setOpen(!open)} className={styles.MobileNavigation__burger} size='40px' />
      <Logo />
      <NavIcons />
      {open && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;