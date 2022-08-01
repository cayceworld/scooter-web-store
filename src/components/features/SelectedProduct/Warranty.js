import { useState } from 'react';
import styles from './SelectedProduct.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartRedux';
const Warranty = props => {


  const warranty = props.warranty;
  const pullData = props.func;

  const dispatch = useDispatch();


  const extendWarranty = () => {
    pullData(warranty);

  }

  //console.log(props);

  //console.log(warranty);

  return (
    <div className={styles.SelectedProduct__box} onClick={extendWarranty}>
      <div>{warranty.year} Year</div>
      <span>-</span>
      <div >${warranty.price}</div>
    </div>

  );
}

export default Warranty;