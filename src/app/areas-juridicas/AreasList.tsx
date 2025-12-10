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

// Variants globales
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const areas = [
  {
    title: "PERSONAS",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "El derecho laboral regula la relación entre empleadores y trabajadores, asegurando el cumplimiento de normas sobre contratación, despidos, seguridad social, prestaciones y condiciones de trabajo.",
    backList: [
      "Prevencion y manejo de conflictos laborales para evitar demandas y sanciones.",
      "Asesoría en contratación, despidos y normativas laborales vigentes.",
      "Defensa en procesos judiciales o administrativos ante inspecciones o reclamaciones.",
      "Diseño de estrategias para la estabilidad y seguridad legal de tu empresa.",
    ],
  },
  {
    title: "EMPRESAS",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Esta área regula relaciones entre personas, protegiendo derechos sobre bienes, contratos, herencias, responsabilidad civil y otros aspectos de la vida cotidiana. Se encarga de resolver disputas sobre propiedad, incumplimiento de acuerdos y daños y perjuicios.",
    backList: [
      "Redacción y revisión de contratos para evitar riesgos legales.",
      "Acompañamiento en disputas civiles, como incumplimiento contractuales o daños y perjuicios.",
      "Protección y defensa en procesos de propiedad, herencias y sucesiones.",
      "Soluciones jurídicas personalizadas para cada caso",
    ],
  },
  {
    title: "COBRO DE CARTERA",
    frontIcon: (
      <FontAwesomeIcon icon={faMoneyBillWave} className={styles.icon} />
    ),
    frontText:
      "El derecho comercial se enfoca en regular las actividades empresariales y mercantiles, incluyendo la constitución y funcionamiento de sociedades, la elabroación de contratos comerciales, la protección de la propiedad industrial y la resolución de conflictos entre empresas.",
    backList: [
      "Creación y estructuración legal de empresas con seguridad jurídica.",
      "Redacción y negociación de contratos comerciales sólidos.",
      "Protección ante conflictos mercantiles y litigios comerciales.",
      "Asesoría en cumplimiento normativo y buenas prácticas empresariales.",
    ],
  },
];

export default function AreasList() {
  return (
    <>
      <DescriptionSection />

      <motion.section
        className={styles.container}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p className={styles.subtitle} variants={fadeUp}>
          SOMOS ESPECIALISTAS EN
        </motion.p>

        <motion.h2 className={styles.title} variants={fadeUp}>
          ÁREAS DE PRÁCTICA
        </motion.h2>

        {/* Grid animada */}
        <motion.div className={styles.grid} variants={stagger}>
          {areas.map(({ title, frontIcon, frontText, backList }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 220, damping: 14 },
              }}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                {/* Frente */}
                <div className={styles.front}>
                  <div className={styles.icon}>{frontIcon}</div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.frontText}>{frontText}</p>
                </div>

                {/* Reverso */}
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
        </motion.div>

        {/* Botón CTA */}
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          variants={fadeUp}
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
