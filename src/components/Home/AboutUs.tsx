import React, { FC } from "react";
import styles from "./styles/AboutUs.module.css";

const AboutUs: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>
        ¿Está buscando un abogado competente, transparente y atento?
      </h2>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Está buscando un abogado verdaderamente especialista en su problema
          legal y no uno que “haga de todo”?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Tiene dinero por cobrar y necesita una firma experta en cobro de
          cartera y recuperación de activos?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Debe enfrentarse a un cliente, proveedor o empresa que no le paga y
          ya no sabe cómo recuperar su dinero de forma legal y efectiva?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Tiene un conflicto que le está quitando tiempo, tranquilidad y
          recursos, y necesita una solución rápida sin acudir a instancias
          judiciales?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Quiere resolver un problema legal sin entrar en una demanda larga,
          costosa y desgastante?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Está enfrentando una situación laboral compleja con un trabajador o
          empleador y necesita un especialista en derecho laboral y empresarial?
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Le preocupa cometer un error frente a la Reforma Laboral 2025 y
          recibir una sanción o demanda?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Siente que su abogado actual no domina realmente su tema y necesita
          un especialista que sí lo haga, con experiencia comprobada?
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <a href="#contacto" className={styles.ctaButton}>
          PROGRAME UNA CONSULTA
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
