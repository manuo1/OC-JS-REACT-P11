import { Link } from "react-router-dom";
import styles from "./Error404.module.scss";

export default function Error404() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oups ! La page que vous demandez n'existe pas.</p>
      <Link className={styles.link} to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
