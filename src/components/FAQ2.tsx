import React, { FC } from "react";
import styles from "../styles/FAQ2.module.css";

interface FlipCardProps {
  frontTitle: string;
  frontIcon: React.ReactNode;
  frontDescription: string;
  backDescription: string;
  highlight?: boolean;
}

const FAQ2: FC<FlipCardProps> = ({
  frontTitle,
  frontIcon,
  frontDescription,
  backDescription,
  highlight = false,
}) => {
  return (
    <div
      className={`${styles.cardWrapper} ${highlight ? styles.highlight : ""}`}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <div className={styles.icon}>{frontIcon}</div>
          <h3 className={styles.title}>{frontTitle}</h3>
          <p>{frontDescription}</p>
        </div>
        <div className={styles.back}>
          <p>{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
