"use client";

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
      <section className={styles.container}>
        <p className={styles.subtitle}>SOMOS ESPECIALISTAS EN</p>
        <h2 className={styles.title}>ÁREAS DE PRÁCTICA</h2>
        <div className={styles.grid}>
          {areas.map(({ title, frontIcon, frontText, backList }) => (
            <div key={title} className={styles.cardWrapper}>
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
            </div>
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
