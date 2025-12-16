"use client";

import styles from "./styles/DifferentSection.module.css";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

function DifferentSection() {
  return (
    <section className={styles.container}>
      {/* TÍTULO CON ANIMACIÓN */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        ¿QUÉ NOS HACE DIFERENTES?
      </motion.h2>

      {/* PÁRRAFOS CON STAGGER */}
      {[
        `En PRAVICE no creemos en soluciones genéricas ni en abogados que “hacen
        de todo”. Creemos en la especialización real. Por eso, su caso no se 
        asigna al azar. Se asigna a un abogado especialista en su tipo de problema 
        legal, con la experiencia, el conocimiento técnico y la estrategia necesaria 
        para obtener resultados concretos.`,

        `Sabemos que su situación no puede quedar en manos de cualquiera. 
        Su dinero, su empresa, su patrimonio y su tranquilidad necesitan ser 
        defendidos por expertos.`,

        `Programe su asesoría hoy y conozca cómo PRAVICE puede ayudarle a resolver 
        su conflicto legal con firmeza, precisión y respaldo real de especialistas.`,
      ].map((text, i) => (
        <motion.p
          key={i}
          className={styles.paragraph}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          {text}
        </motion.p>
      ))}

      {/* BOTÓN ANIMADO */}
      <motion.button
        className={styles.ctaButton}
        onClick={handleClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, boxShadow: "0 6px 14px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
      >
        PROGRAME UNA CONSULTA
      </motion.button>
    </section>
  );
}

export default DifferentSection;
