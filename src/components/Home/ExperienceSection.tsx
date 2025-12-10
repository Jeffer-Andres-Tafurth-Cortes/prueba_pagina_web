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

const ExperienceSection: FC = () => {
  const items = [
    {
      title: "Cobro de Cartera y Recuperación de Activos",
      text: "Asistencia legal especializada para recuperar el dinero adeudado por clientes, empresas o particulares, mediante estrategias jurídicas efectivas como gestión persuasiva, negociación, acuerdos de pago, títulos ejecutivos y procesos judiciales.",
    },
    {
      title: "Solución rápida de conflictos",
      text: "Resolución de conflictos legales de manera ágil, confidencial y eficaz mediante conciliación, negociación y acuerdos estratégicos.",
    },
    {
      title: "Derecho Laboral y Empresarial",
      text: "Asesoría en prevención, representación en conflictos laborales, cumplimiento normativo y protección frente a contingencias legales.",
    },
    {
      title: "Defensa y Protección Patrimonial",
      text: "Protección de bienes, contratos e intereses frente a incumplimientos, fraudes y riesgos legales a través de acciones preventivas y correctivas.",
    },
  ];

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      {/* ------------------ LISTA DE SERVICIOS ------------------ */}
      <motion.div className={styles.servicesSection}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={styles.serviceItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: index * 0.25, // 🔥 Stagger manual
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ------------------ BOTÓN ------------------ */}
      <motion.div
        className={styles.buttonContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 1.1 }}
      >
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
