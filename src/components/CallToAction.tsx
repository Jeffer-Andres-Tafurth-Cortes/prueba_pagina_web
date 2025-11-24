"use client";

import React, { FC } from "react";
import styles from "../styles/CallToAction.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const CallToAction: FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        <small className={styles.topText}>ESCRÍBENOS 24/7</small>

        <h2 className={styles.mainText}>
          Protege tu empresa con asesoría legal experta.
          <span className={styles.highlight}> Agenda tu consulta hoy.</span>
        </h2>

        <div className={styles.divider}></div>

        <p className={styles.bottomText}>
          Estamos listos para ayudarte. Habla con nuestro equipo y recibe la
          orientación que necesitas.
        </p>

        <button className={styles.button} onClick={handleClick}>
          AGENDA UNA ASESORÍA
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
