import React from "react";
import styles from "../../styles/RegistroMarca.module.css";

export default function RegistroMarca() {
  return (
    <section className={styles.section}>
      {/* Título y descripcion arriba */}
      <div className={styles.topContent}>
        <h2 className={styles.title}>
          Registra Tu
          <br />
          Marca
        </h2>
        <p className={styles.description}>
          Proceso 100% digital para proteger tu negocio
        </p>
        <button className={styles.mainButton}>COMIENZA AHORA</button>
      </div>

      {/* Tarjetas abajo */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src="/images/marca-idea.jpg"
            alt="Estudio de Marca"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Estudio de Marca</h3>
          <p className={styles.cardText}>
            Análisis detallado de la identidad, posicionamiento y percepción de
            una marca en el mercado.
          </p>
          <button className={styles.cardButton}>ESTUDIO DE MARCA</button>
        </div>

        <div className={styles.card}>
          <img
            src="/images/registro-marca.jpg"
            alt="Registro de Marca"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Registro de Marca</h3>
          <p className={styles.cardText}>
            Proceso legal mediante el cual una empresa o persona protege su
            nombre, logo o símbolo ante posibles usos no autorizados.
          </p>
          <button className={styles.cardButton}>REGISTRA TU MARCA</button>
        </div>
      </div>
    </section>
  );
}
