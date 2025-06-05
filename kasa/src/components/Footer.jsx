import styles from "./Footer.module.scss";
import logoWhite from "../assets/logo-white.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logoWhite} alt="Kasa" className={styles.logo} />
      <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
