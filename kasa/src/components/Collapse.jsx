import { useState } from "react";
import styles from "./Collapse.module.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`${styles.collapse} ${isOpen ? styles.expandedCollapse : ""}`}
    >
      <div className={styles.header} onClick={toggle}>
        <h2 className={styles.title}>{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${styles.icon} ${isOpen ? styles.iconRotated : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <div
        className={`${styles.content} ${isOpen ? styles.expandedContent : ""}`}
      >
        <div className={styles.contentInner}>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <p key={index} className={styles.line}>
                {item}
              </p>
            ))
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
