import React from "react";
import styles from "./styles/DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Abogados con los
        <br /> mejores resultados
      </h2>
      <p className={styles.text}>
        En <strong>Pravice Abogados</strong>, defendemos tus derechos con
        estrategia y compromiso. Nuestro equipo de expertos trabaja para
        ofrecerte las mejores soluciones legales, garantizando resultados
        sólidos y eficaces en cada caso.
      </p>
    </section>
  );
}
