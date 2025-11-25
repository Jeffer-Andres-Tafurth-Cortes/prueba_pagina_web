import React from "react";
import styles from "./styles/AboutPraviceSection.module.css";

const AboutPraviceSection = () => {
  return (
    <section className={styles.wrapper}>
      {/* ------------------ BARRA DE 3 PASOS ------------------ */}
      <div className={styles.stepsBar}>
        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>1</div>
          <span>Programe Una Consulta</span>
        </div>

        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>2</div>
          <span>Revise Su Caso</span>
        </div>

        <div className={styles.stepItem}>
          <div className={styles.stepNumber}>3</div>
          <span>Cree Un Plan De Acción</span>
        </div>
      </div>

      {/* ------------------ SECCIÓN PRINCIPAL ------------------ */}
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <h2 className={styles.title}>¡Conoce a PRAVICE!</h2>

          <p className={styles.paragraph}>
            Detrás de cada caso, negociación y estrategia legal, hay un equipo
            que ama lo que hace: defender derechos, proteger el patrimonio y
            devolver tranquilidad a quienes confían en nosotros.
          </p>

          <p className={styles.paragraph}>
            En PRAVICE trabajamos con pasión, disciplina y convicción. Cuando no
            estamos diseñando estrategias legales, estamos creando nuevos
            proyectos, formándonos constantemente y fortaleciendo una firma que
            cree en la justicia, el orden y las segundas oportunidades.
          </p>

          <p className={styles.paragraph}>
            Más que abogados, somos aliados legales comprometidos con tu
            tranquilidad.
          </p>

          <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
        </div>

        {/* Imagen derecha */}
        <div className={styles.imageContainer}>
          <img src="/foto-grupal.jpg" alt="Equipo PRAVICE" />
        </div>
      </div>
    </section>
  );
};

export default AboutPraviceSection;
