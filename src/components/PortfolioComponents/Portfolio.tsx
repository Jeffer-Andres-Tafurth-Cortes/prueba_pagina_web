"use client";

import Link from "next/link";
import styles from "../../styles/Portfolio.module.css";
import { motion } from "framer-motion";

export default function Portfolio() {
  const items = [
    "DERECHO LABORAL",
    "DERECHO CIVIL",
    "DERECHO COMERCIAL",
    "DERECHO PENAL",
    "DERECHO DE FAMILIA",
  ];

  return (
    <div className={styles.wrapper}>
      {/* COLUMNA IZQUIERDA */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <small className={styles.subtitle}>Especialistas</small>

        <h1 className={styles.title}>NUESTRAS ÁREAS DE PRÁCTICA</h1>

        <p className={styles.description}>
          Somos una firma jurídica que ofrece acompañamiento completo en áreas
          clave del derecho, brindando asesoría, representación y estrategias
          legales para resolver conflictos y proteger los intereses de nuestros
          clientes. Atendemos casos en materia laboral, civil, comercial, penal
          y de familia, asegurando soluciones integrales para cada situación.
          <br /> <br />
          Si el área de práctica que busca no aparece en el listado, comuníquese
          con nuestro equipo haciendo clic en el botón a continuación.
        </p>

        <Link href={"/areas-juridicas"}>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            ÁREAS DE PRÁCTICA
          </motion.button>
        </Link>
      </motion.div>

      {/* COLUMNA DERECHA - TIMELINE */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <ul className={styles.timeline}>
          {items.map((item, index) => (
            <motion.li
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <span className={styles.number}>{index + 1}</span>
              <p className={styles.itemText}>{item}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
