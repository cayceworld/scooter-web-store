import DesktopAccessories from "./DesktopAccessories";
import MobileAccessories from './MobileAccessories';
import styles from './AccessoriesList.module.scss';

const AccessoriesList = props => {

  const isDesktop = props.isDesktop; 



  return (
    <div className={styles.AccessoriesList}>
      <div className={styles.container}>
        <h1 className={styles.AccessoriesList__title}>Accessories</h1>
       {isDesktop && <DesktopAccessories />}
        {!isDesktop && <MobileAccessories />}
      </div>
    </div>
  );
}

export default AccessoriesList;