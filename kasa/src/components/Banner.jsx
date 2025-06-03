import styles from './Banner.module.scss';

function Banner({ image, textLines }) {
  return (
    <div className={styles.banner}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.overlay}></div>
      {textLines
        ? (
          <h1 className={styles.text}>
            {textLines.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h1>
        )
        : null}
    </div>
  );
}

export default Banner;


