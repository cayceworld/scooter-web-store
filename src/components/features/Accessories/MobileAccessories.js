import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';
import { useSelector } from 'react-redux';
import { getAllAccessories } from '../../../redux/accessoriesRedux';
import Accessory from './Accessory';
import styles from './AccessoriesList.module.scss';

const MobileAccessories = () => {

  const accessories = useSelector(getAllAccessories);

  return (
    <Swiper className={styles.swiper}
      spaceBetween={20}
      slidesPerView={2.2}
      setWrapperSize={true}
      autoHeight={true}
      grabCursor={true}
    >
      {accessories.map(accessory =>
        <SwiperSlide className={styles.swiper__slide}><Accessory
          key={accessory.id} id={accessory.id}
          title={accessory.title} image={accessory.image}
          description={accessory.description} price={accessory.price}
        /></SwiperSlide>
      )}
    </Swiper>
  );
}

export default MobileAccessories;