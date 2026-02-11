"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles/Team.module.css";
import Link from "next/link";

const equipo = [
  {
    nombre: "Alberto Castro",
    cargo: "CEO",
    img: "/doc-alberto.jpeg",
    seoAlt: "Alberto Castro, CEO de Pravice Abogados",
    link: "/nuestro-equipo/Doc_Alberto",
  },
  {
    nombre: "Leydi Tirado",
    cargo: "CCO & Abogada",
    img: "/doc-leidy.jpg",
    seoAlt: "Leydi Tirado, abogada y directora jurídica en Pravice Abogados",
    link: "/nuestro-equipo/Doc_Leidy",
  },
  {
    nombre: "Angie Rivera",
    cargo: "Abogada",
    img: "/doc-angie.jpg",
    seoAlt: "Angie Rivera, abogada especialista en asesoría legal",
    link: "/nuestro-equipo/Doc_Angie",
  },
  {
    nombre: "Guillermo Rodríguez",
    cargo: "Abogado",
    img: "/doct-guillermo.jpeg",
    seoAlt:
      "Guillermo Rodríguez, abogado con experiencia en derecho civil y laboral",
    link: "/nuestro-equipo/Doc_Guillermo",
  },
  {
    nombre: "Milena Torres",
    cargo: "Contadora",
    img: "/doc-milena.jpg",
    seoAlt: "Milena Torres, contadora y asesora financiera legal",
    link: "/nuestro-equipo/Doc_Milena",
  },
  {
    nombre: "Santiago Franco",
    cargo: "Abogado",
    img: "/doc-santiago.jpg",
    seoAlt:
      "Santiago Franco, abogado especializado en resolución de conflictos legales",
    link: "/nuestro-equipo/Doc_Santiago",
  },
];

export default function Equipo() {
  return (
    <section className={styles.section} aria-labelledby="team-title">
      <div className="container">
        <h2 id="team-title" className={styles.title}>
          Abogados especialistas en derecho
        </h2>

        <p className={styles.subTitle}>
          Conoce al equipo profesional que te acompaña y defiende tus intereses
          legales con experiencia, ética y compromiso.
        </p>

        <div className={styles.grid}>
          {equipo.map((p, i) => (
            <motion.article
              key={p.nombre}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.15 }}
              aria-label={`Perfil profesional de ${p.nombre}`}
            >
              <Image
                src={p.img}
                alt={p.seoAlt}
                width={320}
                height={320}
                className={styles.img}
                loading="lazy"
              />

              <div className={styles.info}>
                <h3 className={styles.nombre}>{p.nombre}</h3>
                <p className={styles.cargo}>{p.cargo}</p>
                <Link
                  href={p.link}
                  scroll={false}
                  onClick={() => window.scrollTo(0, 0)}
                  className={styles.profileBtn}
                  aria-label={`Ver perfil completo de ${p.nombre}`}
                >
                  Ver Perfil <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
