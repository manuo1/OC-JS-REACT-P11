import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className={styles.card}>
      <img src={cover} alt={title} className={styles.image} />
      <div className={styles.gradient}></div>
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;
