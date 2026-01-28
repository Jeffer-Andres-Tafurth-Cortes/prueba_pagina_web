"use client";

import { useEffect, useState } from "react";
import styles from "./styles/SkillProgress.module.css";

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "Dedicación Profesional", percentage: 95 },
  { name: "Experiencia Jurídica", percentage: 95 },
  { name: "Casos Ganados", percentage: 90 },
];

export default function SkillProgress() {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    let animationFrameIds: number[] = [];

    skillsData.forEach((skill, index) => {
      let start = 0;
      const duration = 5000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = skill.percentage / steps;

      const animate = () => {
        start += increment;
        if (start > skill.percentage) start = skill.percentage;

        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = Math.floor(start);
          return newProgress;
        });

        if (start < skill.percentage) {
          const raf = window.setTimeout(animate, stepTime);
          animationFrameIds.push(raf);
        }
      };

      animate();
    });

    return () => {
      animationFrameIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section className={styles.container} aria-labelledby="skills-title">
      {/* IMAGEN */}
      <div className={styles.left}>
        <img
          src="/doc-santiago.jpg"
          alt="Abogado especialista en derecho laboral y civil en Bogotá"
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* CONTENIDO */}
      <div className={styles.right}>
        <h2 id="skills-title">
          Experiencia y habilidades de nuestros abogados
        </h2>

        <p>
          En <strong>Pravice Abogados</strong> contamos con un equipo de
          abogados altamente calificados, con amplia experiencia en{" "}
          <strong>derecho laboral, civil y asesoría jurídica integral</strong>.
          Nuestro enfoque combina análisis estratégico, conocimiento legal
          actualizado y un firme compromiso con la defensa de los intereses de
          nuestros clientes.
        </p>

        <p>
          A lo largo de nuestra trayectoria hemos representado exitosamente a
          personas y empresas, logrando resultados favorables en procesos
          complejos y ofreciendo soluciones legales claras, eficaces y
          orientadas a la prevención de riesgos jurídicos.
        </p>

        {/* BARRAS */}
        <div className={styles.skills}>
          {skillsData.map((skill, i) => (
            <div
              key={skill.name}
              className={styles.skill}
              aria-label={`${skill.name}: ${progress[i]} por ciento`}
            >
              <div className={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{progress[i]}%</span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.filled}
                  style={{ width: `${progress[i]}%` }}
                  role="progressbar"
                  aria-valuenow={progress[i]}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
