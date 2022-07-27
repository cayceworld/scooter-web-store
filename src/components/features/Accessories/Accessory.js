import styles from './AccessoriesList.module.scss';
import clsx from 'clsx';
import { addToCart } from '../../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Accessory = props => {


  const accessory = props;


  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(addToCart({
      title: props.title, id:props.id, 
      image: props.image, price: props.price, category: 'accessory'
    }))
  }


  return (
    <div className={styles.Accessory} >
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${props.image}`} /></div>
      <div className={styles.Accessory__title}>{props.title}</div>
      <div className={styles.Accessory__description}>{props.description}</div>
      <div className={styles.Accessory__price}>${props.price}</div>
      <div className={styles.Accessory__button}>

        <button onClick={addProduct} className={clsx(styles.btn, accessory.inStock <= 0 && styles.btn_disabled)}>
          add to card
        </button>
      </div>
    </div>
  );
}

export default Accessory;