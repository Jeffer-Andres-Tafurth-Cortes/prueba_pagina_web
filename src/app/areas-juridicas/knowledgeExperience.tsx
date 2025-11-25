import styles from "./styles/KnowledgeExperience.module.css";
import Image from "next/image";

export default function KnowledgeExperienceSection() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/estatua2-removebg.png"
          alt="Estatua de la justicia y libros"
          width={600}
          height={600}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>CONOCIMIENTO Y EXPERIENCIA</h2>

        <p>
          En Pravice Abogados, contamos con un equipo de profesionales altamente
          capacitados en diversas áreas del derecho, con amplia experiencia en
          la resolución de conflictos legales.
        </p>

        <p>
          Nuestra trayectoria nos ha permitido asesorar y representar a clientes
          en casos complejos, ofreciendo estrategias jurídicas sólidas y
          soluciones efectivas. Nos enfocamos en prevenir riesgos, proteger los
          intereses de nuestros clientes y alcanzar los mejores resultados,
          siempre con un enfoque claro, práctico y orientado a la justicia.
        </p>

        {/* LISTADO MEJORADO */}
        <ul className={styles.timelineList}>
          <li>
            <span className={styles.number}>01</span>
            <p>
              <strong>EXPERIENCIA Y ESPECIALIZACIÓN</strong>
            </p>
          </li>

          <li>
            <span className={styles.number}>02</span>
            <p>
              <strong>DEFENSA Y REPRESENTACIÓN EFECTIVA</strong>
            </p>
          </li>

          <li>
            <span className={styles.number}>03</span>
            <p>
              <strong>PREVENCIÓN Y SEGURIDAD JURÍDICA</strong>
            </p>
          </li>

          <li>
            <span className={styles.number}>04</span>
            <p>
              <strong>COMPROMISO Y ATENCIÓN PERSONALIZADA</strong>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
