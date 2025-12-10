"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles/ExperienceSection.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const ExperienceSection: FC = () => {
  return (
    <motion.section
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className={styles.servicesSection}
        variants={containerVariants}
      >
        <motion.div className={styles.serviceItem} variants={itemVariants}>
          <h4>Cobro de Cartera y Recuperación de Activos</h4>
          <p>
            Asistencia legal especializada para recuperar el dinero adeudado por
            clientes, empresas o particulares, mediante estrategias jurídicas
            efectivas como gestión persuasiva, negociación, acuerdos de pago,
            títulos ejecutivos y procesos judiciales.
          </p>
        </motion.div>

        <motion.div className={styles.serviceItem} variants={itemVariants}>
          <h4>Solución rápida de conflictos</h4>
          <p>
            Resolución de conflictos legales de manera ágil, confidencial y
            eficaz mediante conciliación, negociación y acuerdos estratégicos.
          </p>
        </motion.div>

        <motion.div className={styles.serviceItem} variants={itemVariants}>
          <h4>Derecho Laboral y Empresarial</h4>
          <p>
            Asesoría en prevención, representación en conflictos laborales,
            cumplimiento normativo y protección frente a contingencias legales.
          </p>
        </motion.div>

        <motion.div className={styles.serviceItem} variants={itemVariants}>
          <h4>Defensa y Protección Patrimonial</h4>
          <p>
            Protección de bienes, contratos e intereses frente a
            incumplimientos, fraudes y riesgos legales a través de acciones
            preventivas y correctivas.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.buttonContainer} variants={itemVariants}>
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          PROGRAME UNA CONSULTA
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
