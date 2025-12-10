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

// Variants seguros para TS
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutUs: FC = () => {
  return (
    <motion.section
      className={styles.container}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Título */}
      <motion.h2 className={styles.mainTitle} variants={fadeUp}>
        ¿Está buscando un abogado competente, transparente y atento?
      </motion.h2>

      {/* Grid con stagger */}
      <motion.div className={styles.grid} variants={staggerContainer}>
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
            variants={fadeUp}
            whileHover={{ scale: 1.02, translateX: 6 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.icon}>✔</span>
            {text}
          </motion.div>
        ))}
      </motion.div>

      {/* Botón */}
      <div className={styles.buttonWrapper}>
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          variants={fadeUp}
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
