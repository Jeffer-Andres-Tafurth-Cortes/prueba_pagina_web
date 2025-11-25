import React from "react";
import styles from "./styles/DifferentSection.module.css";

const DifferentSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>¿QUÉ NOS HACE DIFERENTES?</h2>

      <p className={styles.paragraph}>
        En PRAVICE no creemos en soluciones genéricas ni en abogados que “hacen
        de todo”. Creemos en la <strong>especialización real</strong>. Por eso,
        su caso no se asigna al azar. Se asigna a un abogado especialista en su
        tipo de problema legal, con la experiencia, el conocimiento técnico y la
        estrategia necesaria para obtener resultados concretos.
      </p>

      <p className={styles.paragraph}>
        Sabemos que su situación no puede quedar en manos de cualquiera.
        <strong>
          {" "}
          Su dinero, su empresa, su patrimonio y su tranquilidad necesitan ser
          defendidos por expertos.
        </strong>
      </p>

      <p className={styles.paragraph}>
        Programe su asesoría hoy y conozca cómo PRAVICE puede ayudarle a
        resolver su conflicto legal con firmeza, precisión y respaldo real de
        especialistas.
      </p>

      <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
    </section>
  );
};

export default DifferentSection;
