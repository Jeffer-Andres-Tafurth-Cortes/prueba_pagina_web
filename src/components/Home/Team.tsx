"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles/Team.module.css";

const equipo = [
  {
    nombre: "Alberto Castro",
    cargo: "CEO",
    img: "/doc-alberto.jpeg",
  },
  {
    nombre: "Leydi Tirado",
    cargo: "CCO & Abogada",
    img: "/doc-leidy.jpeg",
  },
  {
    nombre: "Angie Rivera",
    cargo: "Abogada",
    img: "/doc-angie.jpg",
  },
  {
    nombre: "Guillermo Rodriguez",
    cargo: "Abogado",
    img: "/doct-guillermo.jpeg",
  },
  {
    nombre: "Milena Torres",
    cargo: "Contadora",
    img: "/doc-milena.jpg",
  },
  {
    nombre: "Santiago Franco",
    cargo: "Abogado",
    img: "/doc-santiago.jpg",
  },
];

export default function Equipo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Nuestro Equipo</h2>
        <h3 className={styles.subTitle}>Conoce a tus abogados</h3>

        <div className={styles.grid}>
          {equipo.map((p, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.15 }}
            >
              <Image
                src={p.img}
                alt={p.nombre}
                width={320}
                height={320}
                className={styles.img}
              />

              <div className={styles.info}>
                <h3 className={styles.nombre}>{p.nombre}</h3>
                <p className={styles.cargo}>{p.cargo}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
