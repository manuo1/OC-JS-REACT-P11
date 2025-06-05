import React from "react";
import styles from "./Rating.module.scss";

function Rating({ value }) {
  const totalStars = 5;
  const rating = parseInt(value, 10);

  return (
    <div className={styles.rating}>
      {Array.from({ length: totalStars }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${styles.star} ${i < rating ? styles.active : ""}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default Rating;
