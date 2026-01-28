"use client";

import { motion } from "framer-motion";
import styles from "./styles/AreasList.module.css";
import DescriptionSection from "./DescriptionSection";
import KnowledgeExperienceSection from "./knowledgeExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faUsers,
  faScaleBalanced,
  faBuilding,
  faMoneyBillWave,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
};

const areas = [
  {
    title: "Derecho Laboral",
    icon: faGavel,
    description:
      "Asesoría legal en derecho laboral para trabajadores y empleadores, enfocada en la protección de derechos y solución de conflictos.",
    cases: [
      "Despidos sin justa causa",
      "Liquidaciones y prestaciones sociales",
      "Conflictos laborales",
      "Contratos de trabajo",
    ],
  },
  {
    title: "Derecho de Familia",
    icon: faUsers,
    description:
      "Acompañamiento jurídico en derecho de familia con enfoque humano, confidencial y orientado a la protección familiar.",
    cases: [
      "Divorcios y separaciones",
      "Custodia y visitas",
      "Cuota alimentaria",
      "Sucesiones y herencias",
    ],
  },
  {
    title: "Derecho Civil",
    icon: faScaleBalanced,
    description:
      "Defensa de derechos civiles, contractuales y patrimoniales entre personas naturales y jurídicas.",
    cases: [
      "Contratos civiles",
      "Arrendamientos",
      "Responsabilidad civil",
      "Procesos de sucesión",
    ],
  },
  {
    title: "Derecho Comercial y Empresarial",
    icon: faBuilding,
    description:
      "Asesoría legal para empresas y emprendedores, enfocada en prevención de riesgos y seguridad jurídica.",
    cases: [
      "Constitución de empresas",
      "Contratos comerciales",
      "Conflictos entre socios",
      "Asesoría empresarial",
    ],
  },
  {
    title: "Cobro de Cartera",
    icon: faMoneyBillWave,
    description:
      "Gestión jurídica especializada en recuperación de cartera vencida y obligaciones incumplidas.",
    cases: [
      "Cobro prejurídico",
      "Cobro judicial",
      "Acuerdos de pago",
      "Recuperación de activos",
    ],
  },
  {
    title: "Conciliación en Derecho",
    icon: faHandshake,
    description:
      "Resolución de conflictos legales mediante conciliación, evitando procesos judiciales largos.",
    cases: [
      "Conciliaciones civiles",
      "Conciliaciones familiares",
      "Acuerdos extrajudiciales",
      "Prevención de litigios",
    ],
  },
];

export default function AreasList() {
  return (
    <>
      <DescriptionSection />

      <section className={styles.container}>
        <p className={styles.subtitle}>SOMOS ESPECIALISTAS EN</p>
        <h2 className={styles.title}>ÁREAS DE PRÁCTICA</h2>

        <div className={styles.grid}>
          {areas.map(({ title, icon, description, cases }) => (
            <motion.article
              key={title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={icon} className={styles.icon} />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <ul className={styles.caseList}>
                {cases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </section>

      <KnowledgeExperienceSection />
    </>
  );
}
