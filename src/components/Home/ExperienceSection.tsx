import React, { FC } from "react";
import styles from "./styles/ExperienceSection.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const ExperienceSection: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.servicesSection}>
        <div className={styles.serviceItem}>
          <h4>Cobro de Cartera y Recuperación de Activos</h4>
          <p>
            Asistencia legal especializada para recuperar el dinero adeudado por
            clientes, empresas o particulares, mediante estrategias jurídicas
            efectivas como gestión persuasiva, negociación, acuerdos de pago,
            títulos ejecutivos y procesos judiciales, garantizando la protección
            de su flujo de caja y su patrimonio.
          </p>
        </div>

        <div className={styles.serviceItem}>
          <h4>
            Solución rápida de conflictos sin acudir a instancias
            jurisdiccionales
          </h4>
          <p>
            Asistencia especializada para resolver conflictos legales de manera
            ágil, confidencial y eficaz, a través de mecanismos alternativos,
            conciliación, negociación jurídica y acuerdos estratégicos, evitando
            procesos largos, costosos y desgastantes.
          </p>
        </div>

        <div className={styles.serviceItem}>
          <h4>Derecho Laboral y Empresarial</h4>
          <p>
            Asistencia legal especializada en prevención, asesoría y
            representación en conflictos laborales y empresariales, incluyendo
            reestructuraciones, cumplimiento normativo frente a la Reforma
            Laboral 2025, demandas laborales, relaciones contractuales y
            protección de la empresa frente a contingencias legales.
          </p>
        </div>

        <div className={styles.serviceItem}>
          <h4>Defensa y Protección Patrimonial</h4>
          <p>
            Asistencia especializada para la protección de sus bienes, contratos
            e intereses económicos, frente a incumplimientos, ocupaciones
            indebidas, fraudes, riesgos legales e inseguridad jurídica, a través
            de acciones preventivas y correctivas de alto impacto legal.
          </p>
        </div>
      </div>

      {/* BOTÓN CENTRADO */}
      <div className={styles.buttonContainer}>
        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
