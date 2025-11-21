import React from "react";
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
        <h2 className={styles.title}>Conocimiento y Experiencia</h2>
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
        <ul className={styles.bulletList}>
          <li>Experiencia y Especialización</li>
          <li>Defensa y Representación Efectiva</li>
          <li>Prevención y Seguridad Jurídica</li>
          <li>Compromiso y Atención Personalizada</li>
        </ul>
      </div>
    </section>
  );
}
