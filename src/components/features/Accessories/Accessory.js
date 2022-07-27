import styles from './AccessoriesList.module.scss';

const Accessory = props => {

const showInConsole = () => {
  console.log(props)
}


  return ( 
    <div className={styles.Accessory} onClick={showInConsole}>
      <div className={styles.Accessory__image}><img src={`${process.env.PUBLIC_URL}/images/Accessories/${props.image}`} /></div>
      <div className={styles.Accessory__title}>{props.title}</div>
      <div className={styles.Accessory__description}>{props.description}</div>
      <div className={styles.Accessory__price}>${props.price}</div>
      <div className={styles.Accessory__button}>

        <button className={styles.btn}>add to card</button>
      </div>
    </div>
   );
}
 
export default Accessory;