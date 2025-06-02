import styles from './Banner.module.scss';

function Banner({ image, text }) {
  return (
    <div className={styles.banner}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.overlay}></div>
      {text ? <h1 className={styles.text}>{text}</h1> : null}
    </div>
  );
}

export default Banner;
