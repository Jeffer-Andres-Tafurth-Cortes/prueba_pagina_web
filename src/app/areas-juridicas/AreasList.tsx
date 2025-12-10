"use client";

import { motion } from "framer-motion";
import styles from "./styles/AreasList.module.css";
import DescriptionSection from "./DescriptionSection";
import KnowledgeExperienceSection from "./knowledgeExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const areas = [
  {
    title: "PERSONAS",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "El derecho laboral regula la relación entre empleadores y trabajadores, asegurando el cumplimiento de normas sobre contratación, despidos, seguridad social, prestaciones y condiciones de trabajo.",
    backList: [
      "Prevencion y manejo de conflictos laborales.",
      "Asesoría en contratación y despidos.",
      "Defensa ante inspecciones y reclamaciones.",
      "Estrategias legales para estabilidad de tu empresa.",
    ],
  },
  {
    title: "EMPRESAS",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Regula relaciones entre personas, derechos sobre bienes, contratos, herencias, responsabilidad civil y otros aspectos de la vida cotidiana.",
    backList: [
      "Redacción y revisión de contratos.",
      "Acompañamiento en disputas civiles.",
      "Defensa en herencias y sucesiones.",
      "Soluciones jurídicas personalizadas.",
    ],
  },
  {
    title: "COBRO DE CARTERA",
    frontIcon: (
      <FontAwesomeIcon icon={faMoneyBillWave} className={styles.icon} />
    ),
    frontText:
      "Regula actividades empresariales, contratos comerciales, propiedad industrial y conflictos mercantiles.",
    backList: [
      "Creación y estructuración legal de empresas.",
      "Contratos comerciales sólidos.",
      "Protección ante litigios mercantiles.",
      "Asesoría en cumplimiento normativo.",
    ],
  },
];

export default function AreasList() {
  return (
    <>
      <DescriptionSection />

      <motion.section
        className={styles.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* SUBTÍTULO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SOMOS ESPECIALISTAS EN
        </motion.p>

        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          ÁREAS DE PRÁCTICA
        </motion.h2>

        {/* GRID animada SIN variants */}
        <div className={styles.grid}>
          {areas.map(({ title, frontIcon, frontText, backList }) => (
            <motion.div
              key={title}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 220, damping: 14 },
              }}
            >
              <div className={styles.card}>
                <div className={styles.front}>
                  <div className={styles.icon}>{frontIcon}</div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.frontText}>{frontText}</p>
                </div>

                <div className={styles.back}>
                  <ul className={styles.bulletList}>
                    {backList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          PROGRAME UNA CONSULTA
        </motion.button>
      </motion.section>

      <KnowledgeExperienceSection />
    </>
  );
}
