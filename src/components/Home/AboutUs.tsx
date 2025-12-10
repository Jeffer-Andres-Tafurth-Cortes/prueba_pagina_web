"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles/AboutUs.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const AboutUs: FC = () => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* TÍTULO */}
      <motion.h2
        className={styles.mainTitle}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Está buscando un abogado competente, transparente y atento?
      </motion.h2>

      {/* GRID con fadeUp + stagger manual */}
      <div className={styles.grid}>
        {[
          "¿Está buscando un abogado verdaderamente especialista en su problema legal y no uno que “haga de todo”?",
          "¿Tiene dinero por cobrar y necesita una firma experta en cobro de cartera y recuperación de activos?",
          "¿Debe enfrentarse a un cliente, proveedor o empresa que no le paga y ya no sabe cómo recuperar su dinero de forma legal y efectiva?",
          "¿Tiene un conflicto que le está quitando tiempo, tranquilidad y recursos, y necesita una solución rápida sin acudir a instancias judiciales?",
          "¿Quiere resolver un problema legal sin entrar en una demanda larga, costosa y desgastante?",
          "¿Está enfrentando una situación laboral compleja con un trabajador o empleador y necesita un especialista en derecho laboral y empresarial?",
          "¿Le preocupa cometer un error frente a la Reforma Laboral 2025 y recibir una sanción o demanda?",
          "¿Siente que su abogado actual no domina realmente su tema y necesita un especialista que sí lo haga, con experiencia comprobada?",
        ].map((text, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }} // 🔥 stagger manual
            whileHover={{ scale: 1.02, x: 6 }}
          >
            <span className={styles.icon}>✔</span>
            {text}
          </motion.div>
        ))}
      </div>

      {/* BOTÓN */}
      <div className={styles.buttonWrapper}>
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PROGRAME UNA CONSULTA
        </motion.button>
      </div>
    </motion.section>
  );
};

export default AboutUs;
