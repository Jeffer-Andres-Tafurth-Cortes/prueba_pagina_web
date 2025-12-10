"use client";

import { motion } from "framer-motion";
import styles from "./styles/AboutPraviceSection.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

// Variants seguros para TS (sin errores)
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPraviceSection() {
  return (
    <motion.section
      className={styles.wrapper}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ------------------ BARRA DE 3 PASOS ------------------ */}
      <motion.div className={styles.stepsBar} variants={fadeUp}>
        <motion.div className={styles.stepItem} variants={fadeUp}>
          <div className={styles.stepNumber}>1</div>
          <span>Programe Una Consulta</span>
        </motion.div>

        <motion.div className={styles.stepItem} variants={fadeUp}>
          <div className={styles.stepNumber}>2</div>
          <span>Revise Su Caso</span>
        </motion.div>

        <motion.div className={styles.stepItem} variants={fadeUp}>
          <div className={styles.stepNumber}>3</div>
          <span>Cree Un Plan De Acción</span>
        </motion.div>
      </motion.div>

      {/* ------------------ SECCIÓN PRINCIPAL ------------------ */}
      <motion.div className={styles.container} variants={staggerContainer}>
        {/* Texto */}
        <motion.div className={styles.contentBox} variants={fadeUp}>
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

          <motion.button
            className={styles.ctaButton}
            onClick={handleClick}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            PROGRAME UNA CONSULTA
          </motion.button>
        </motion.div>

        {/* Imagen */}
        <motion.div className={styles.imageContainer} variants={fadeUp}>
          <motion.img
            src="/foto-abogados.jpg"
            alt="Equipo PRAVICE"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
