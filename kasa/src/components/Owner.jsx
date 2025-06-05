import React from "react";
import styles from "./Owner.module.scss";

function Owner({ name, picture }) {
  return (
    <div className={styles.owner}>
      <div className={styles.name}>
        {name.split(" ").map((part, i) => (
          <span key={i}>{part}</span>
        ))}
      </div>
      <img src={picture} alt={`Photo de ${name}`} className={styles.picture} />
    </div>
  );
}

export default Owner;
