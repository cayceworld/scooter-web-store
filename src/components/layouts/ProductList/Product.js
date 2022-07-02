import clsx from 'clsx';
import styles from './ProductList.module.scss';
import { useDispatch } from 'react-redux';
import { toggleSelect } from '../../../redux/kickscooterReducer';

const Product = props => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSelect({ id: props.id, isSelect: props.isSelect }))
  }

  return (
    <div onClick={toggle} key={props.id} className={clsx(styles.products__item, props.isSelect && styles.products__item_active)}>
      <div className={styles.product__image}>
        <img src={`${process.env.PUBLIC_URL}/images/kickscooters/${props.image}`} />
      </div>
      <div className={styles.product__title}>
        {props.title}
      </div>
    </div>
  );
}

export default Product;