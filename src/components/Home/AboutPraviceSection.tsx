"use client";

import { motion } from "framer-motion";
import styles from "./styles/AboutPraviceSection.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function AboutPraviceSection() {
  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* ------------------ BARRA DE 3 PASOS ------------------ */}
      <div className={styles.stepsBar}>
        {[1, 2, 3].map((num, i) => (
          <motion.div
            key={i}
            className={styles.stepItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className={styles.stepNumber}>{num}</div>
            <span>
              {num === 1
                ? "Programe Una Consulta"
                : num === 2
                ? "Revise Su Caso"
                : "Cree Un Plan De Acción"}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ------------------ SECCIÓN PRINCIPAL ------------------ */}
      <div className={styles.container}>
        {/* Texto */}
        <motion.div
          className={styles.contentBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>¡Conoce a PRAVICE!</h2>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Detrás de cada caso, negociación y estrategia legal, hay un equipo
            que ama lo que hace: defender derechos, proteger el patrimonio y
            devolver tranquilidad a quienes confían en nosotros.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            En PRAVICE trabajamos con pasión, disciplina y convicción. Cuando no
            estamos diseñando estrategias legales, estamos creando nuevos
            proyectos, formándonos constantemente y fortaleciendo una firma que
            cree en la justicia, el orden y las segundas oportunidades.
          </motion.p>

          <motion.p
            className={styles.paragraph}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Más que abogados, somos aliados legales comprometidos con tu
            tranquilidad.
          </motion.p>

          <motion.button
            className={styles.ctaButton}
            onClick={handleClick}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            PROGRAME UNA CONSULTA
          </motion.button>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src="/foto-abogados.jpg"
            alt="Equipo PRAVICE"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
