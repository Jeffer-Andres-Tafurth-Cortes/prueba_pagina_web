"use client";

import styles from "./styles/AreasList.module.css";
import DescriptionSection from "./DescriptionSection";
import KnowledgeExperienceSection from "./knowledgeExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBalanceScale,
  faBuilding,
  faLock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const areas = [
  {
    title: "Derecho Laboral",
    frontIcon: <FontAwesomeIcon icon={faGavel} className={styles.icon} />,
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
    title: "Derecho Civil",
    frontIcon: (
      <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
    ),
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
    title: "Derecho Comercial",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "El derecho comercial se enfoca en regular las actividades empresariales y mercantiles, incluyendo la constitución y funcionamiento de sociedades, la elabroación de contratos comerciales, la protección de la propiedad industrial y la resolución de conflictos entre empresas.",
    backList: [
      "Creación y estructuración legal de empresas con seguridad jurídica.",
      "Redacción y negociación de contratos comerciales sólidos.",
      "Protección ante conflictos mercantiles y litigios comerciales.",
      "Asesoría en cumplimiento normativo y buenas prácticas empresariales.",
    ],
  },
  {
    title: "Derecho Penal",
    frontIcon: <FontAwesomeIcon icon={faLock} className={styles.icon} />,
    frontText:
      "Esta rama del derecho establece los delitos, sus penas y el proceso judicial correspondiente. Su objetivo es garantizar la justicia, protegiendo a las victimas y asegurando que quienes infrinjan la ley sean juzgados adecuadamente. Además, abarca la defensa penal en casos de acusaciones y procesos judiciales.",
    backList: [
      "Defensa penal estratégica en investigaciones y procesos judiciales.",
      "Protección de los derechos del acusado o de la victima en cualquier etapa del proceso.",
      "Acompañamiento en audiencias y negociaciones con la fiscalia.",
      "Reduccion de riesgos legales mediante asesoría preventiva.",
    ],
  },
  {
    title: "Derecho de Familia",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "Regula las relaciones familiares, incluyendo matrimonio, divorcio, custodia de menores, pensión alimenticia, adopciones y sucesiones. Su propósito es proteger los derechos de los integrantes de una familia y garantizar soluciones justas en situaciones de conflicto o reorganización familiar.",
    backList: [
      "Acompañamiento en procesos de divorcios y separación con acuerdos justos.",
      "Representación en casos de custodia y régimen de visitas.",
      "Gestion legal de herencias y sucesiones para evitar conflictos familiares.",
      "Protección de los derechos de los menores y la familia en cada proceso.",
    ],
  },
];

export default function AreasList() {
  return (
    <>
      <DescriptionSection />
      <section className={styles.container}>
        <p className={styles.subtitle}>Somos especialistas en</p>
        <h2 className={styles.title}>Áreas de práctica</h2>
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
          Agenda tu asesoría
        </button>
      </section>
      <KnowledgeExperienceSection />
    </>
  );
}
