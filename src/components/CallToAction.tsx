import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/CallToAction.module.css";

const CallToAction: FC = () => {
  return (
    <section className={styles.ctaSection}>
      <small className={styles.topText}>ESCRÍBENOS 24/7</small>
      <h2 className={styles.mainText}>
        Protege tu empresa con asesoría legal experta. ¡Contáctanos hoy y agenda
        tu consulta!
      </h2>
      <div className={styles.divider}></div>
      <p className={styles.bottomText}>
        Habla con nuestros expertos ahora. Llámanos y recibe la orientación que
        necesitas.
      </p>
      <div className={styles.phoneWrapper}>
        <span className={styles.phoneIcon}>
          <FontAwesomeIcon icon={faPhone} />
        </span>
        <a href="tel:+573114659315" className={styles.phoneNumber}>
          (311) 465-9315
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
