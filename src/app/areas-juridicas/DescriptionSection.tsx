"use client";

import { motion } from "framer-motion";
import styles from "./styles/DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <section className={styles.container}>
      {/* TÍTULO */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ABOGADOS CON LOS
        <br /> MEJORES RESULTADOS
      </motion.h2>

      {/* PRIMER PÁRRAFO */}
      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        En <strong>Pravice Abogados</strong>, defendemos tus derechos con
        <span className={styles.highlight}>
          {" "}
          estrategia, experiencia y compromiso.{" "}
        </span>
        Nuestro equipo analiza cada caso con precisión, construyendo soluciones
        legales sólidas que garanticen resultados reales y confiables.
      </motion.p>

      {/* SEGUNDO PÁRRAFO */}
      <motion.p
        className={styles.textSecondary}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Atendemos tus necesidades legales con rigor profesional, atención
        personalizada y un enfoque diseñado para proteger lo que más valoras.
      </motion.p>
    </section>
  );
}
