import React, { FC } from "react";
import styles from "./styles/AboutUs.module.css";
import "../../../public/doc-alberto.jpeg";

const AboutUs: FC = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.textSection}>
          <small className={styles.subtitle}>Abogados Especialistas</small>
          <h2 className={styles.title}>Nosotros</h2>

          <p className={styles.paragraph}>
            Desde <strong>1998</strong>, en Pravice Abogados hemos revolucionado
            la forma de prestar servicios legales, priorizando la{" "}
            <strong>
              especialización, la transparencia y los resultados reales.
            </strong>{" "}
            Lo que inició con la recuperación de cartera, hoy es una firma
            integral con expertos en todas las áreas del derecho.
          </p>

          <p className={styles.paragraph}>
            Cada caso es único y merece un especialista. Nuestro compromiso es
            brindar{" "}
            <strong>
              soluciones estratégicas, asesoría experta y resultados efectivos,
            </strong>{" "}
            porque entendemos que detrás de cada proceso legal hay personas y
            empresas que necesitan confianza y respaldo.
          </p>

          <p className={styles.highlight}>
            En Pravice Abogados,{" "}
            <strong>
              convertimos los desafíos legales en soluciones sólidas.
            </strong>
          </p>

          <h3 className={styles.signature}>DR. Alberto Castro</h3>
          <small className={styles.signatureSmall}>
            Fundador de Pravice Abogados
          </small>
        </div>

        <div className={styles.imageSection}>
          <img
            src="/doc-alberto.jpeg"
            alt="DR. Alberto Castro"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
