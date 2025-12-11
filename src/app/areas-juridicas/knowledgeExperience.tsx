"use client";

import { motion } from "framer-motion";
import styles from "./styles/KnowledgeExperience.module.css";
import Image from "next/image";

export default function KnowledgeExperienceSection() {
  return (
    <section className={styles.container}>
      {/* IMAGEN */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src="/estatua2-removebg.png"
          alt="Estatua de la justicia y libros"
          width={600}
          height={600}
          className={styles.image}
        />
      </motion.div>

      {/* CONTENIDO */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          CONOCIMIENTO Y EXPERIENCIA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En Pravice Abogados, contamos con un equipo de profesionales altamente
          capacitados en diversas áreas del derecho, con amplia experiencia en
          la resolución de conflictos legales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nuestra trayectoria nos ha permitido asesorar y representar a clientes
          en casos complejos, ofreciendo estrategias jurídicas sólidas y
          soluciones efectivas. Nos enfocamos en prevenir riesgos, proteger los
          intereses de nuestros clientes y alcanzar los mejores resultados,
          siempre con un enfoque claro, práctico y orientado a la justicia.
        </motion.p>

        {/* LISTA CON STAGGER */}
        <motion.ul
          className={styles.timelineList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {[
            "EXPERIENCIA Y ESPECIALIZACIÓN",
            "DEFENSA Y REPRESENTACIÓN EFECTIVA",
            "PREVENCIÓN Y SEGURIDAD JURÍDICA",
            "COMPROMISO Y ATENCIÓN PERSONALIZADA",
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className={styles.number}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>

              <p>
                <strong>{text}</strong>
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
