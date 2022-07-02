import styles from './Navlogo.module.scss';


const Navlogo = () => {
  return (
    <div className={styles.navlogo}>
      <div className={styles.container}>
        <div className={styles.navlogo_wrapper}>
          <div className={styles.navlogo__logo}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
          </div>
          <div className={styles.navlogo__image}>
            <div className={styles.navlogo__image_img}>
              <img src={`${process.env.PUBLIC_URL}/images/john.png`} />
              </div>
            <div className={styles.navlogo__image_content}>
              <h3>JOHN SMITH</h3>
              <p >ask a question <br />
                to the director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navlogo;