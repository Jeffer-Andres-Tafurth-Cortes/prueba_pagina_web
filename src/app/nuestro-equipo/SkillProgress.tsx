"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/SkillProgress.module.css";

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: "Dedicación", percentage: 95 },
  { name: "Experiencia", percentage: 95 },
  { name: "Casos Ganados", percentage: 90 },
];

export default function SkillProgress() {
  // Estado para controlar porcentaje animado por cada skill
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    let animationFrameIds: number[] = [];

    skillsData.forEach((skill, index) => {
      let start = 0;
      const duration = 2000; // Duración animación 2 segundos
      const stepTime = 20; // ms entre incrementos
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
    <section className={styles.container}>
      <div className={styles.left}>
        <img
          src="/doc-santiago.jpg"
          alt="Abogado perfil"
          className={styles.image}
        />
      </div>
      <div className={styles.right}>
        <h2>Habilidades de nuestros abogados</h2>
        <p>
          Nuestro equipo está compuesto por abogados altamente capacitados, con
          una combinación de experiencia, conocimiento y compromiso con la
          excelencia legal. Nos especializamos en la resolución estratégica de
          conflictos, el asesoramiento integral y la representación efectiva en
          diversas áreas del derecho.
        </p>

        <div className={styles.skills}>
          {skillsData.map((skill, i) => (
            <div key={skill.name} className={styles.skill}>
              <div className={styles.skillHeader}>
                <span>{skill.name}</span>
                <span>{progress[i]} %</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.filled}
                  style={{ width: `${progress[i]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
