import React, { FC } from "react";
import styles from "@/styles/PortfolioCard.module.css";

interface PortfolioCardProps {
  number: string;
  title: string;
  frontText: string;
  backText: string;
  buttonText: string;
  highlight?: boolean;
  link?: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  number,
  title,
  frontText,
  backText,
  buttonText,
  highlight,
  link,
}) => {
  return (
    <div
      className={`${styles.cardWrapper} ${highlight ? styles.highlight : ""}`}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <h2 className={styles.number}>{number}</h2>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.frontText}>{frontText}</p>
          <button
            className={styles.button}
            onClick={() => {
              if (link) window.open(link, "_blank", "noopener,noreferrer");
            }}
          >
            {buttonText.toUpperCase()}
          </button>
        </div>
        <div className={styles.back}>
          <p className={styles.backText}>{backText}</p>
          <button
            className={styles.button}
            onClick={() => {
              if (link) window.open(link, "_blank", "noopener,noreferrer");
            }}
          >
            {buttonText.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
