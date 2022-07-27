import styles from './AccessoriesList.module.scss';
import clsx from 'clsx';

const Accessory = props => {


  const accessory = props;
  const showInConsole = () => {
    console.log(accessory)
  }



  return (
    <div className={styles.Accessory} onClick={showInConsole}>
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${props.image}`} /></div>
      <div className={styles.Accessory__title}>{props.title}</div>
      <div className={styles.Accessory__description}>{props.description}</div>
      <div className={styles.Accessory__price}>${props.price}</div>
      <div className={styles.Accessory__button}>

        <button className={clsx(styles.btn, accessory.inStock <= 0 && styles.btn_disabled)}>
          add to card
          </button>
      </div>
    </div>
  );
}

export default Accessory;