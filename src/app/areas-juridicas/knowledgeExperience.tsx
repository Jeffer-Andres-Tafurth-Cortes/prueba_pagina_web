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
          alt="Estatua de la justicia representando el conocimiento y la experiencia jurídica de abogados profesionales"
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
          Conocimiento jurídico y experiencia profesional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice Abogados</strong> contamos con un equipo de
          abogados especializados, con sólida formación y amplia experiencia en
          diversas áreas del derecho, enfocados en la asesoría y representación
          legal de personas y empresas.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nuestra trayectoria nos permite abordar casos complejos con una visión
          estratégica, ofreciendo soluciones jurídicas claras, seguras y
          orientadas a resultados. Trabajamos en la prevención de riesgos
          legales, la protección de intereses y la defensa efectiva de nuestros
          clientes en cada etapa del proceso.
        </motion.p>

        {/* LISTA DE VALOR */}
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
            "Experiencia comprobada en asesoría y representación legal",
            "Defensa jurídica estratégica y efectiva",
            "Prevención de riesgos y seguridad jurídica",
            "Atención personalizada y compromiso profesional",
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

              <p>{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
