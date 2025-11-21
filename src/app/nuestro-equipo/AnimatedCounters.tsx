"use client";

import { useState, useEffect } from "react";
import styles from "./styles/AnimatedCounters.module.css";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number; // duración animación en ms
  title: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 2000,
  title,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30; // ms entre cada incremento
    const totalSteps = Math.ceil(duration / incrementTime);
    const increment = end / totalSteps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <div className={styles.counterCard}>
      <h3 className={styles.count}>
        {count}
        {suffix}
      </h3>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default function AnimatedCounters() {
  return (
    <section className={styles.container}>
      <h3 className={styles.subtitle}>
        20 años de experiencia en todas las áreas del derecho.
      </h3>
      <p className={styles.text}>
        Con dos décadas de experiencia en el ámbito legal, hemos acompañado a
        nuestros clientes en la resolución de casos complejos con
        profesionalismo y compromiso. Nuestra trayectoria nos permite ofrecer
        asesoramiento sólido, estrategias efectivas y soluciones adaptadas a
        cada situación.En cada caso, combinamos conocimiento, ética y dedicación
        para garantizar la mejor defensa de sus intereses. Ya sea en litigios,
        asesoramiento empresarial o resolución de conflictos, nuestra
        experiencia es su mayor respaldo.
      </p>
      <Counter end={99} suffix="%" title="Clientes Felices" />
      <Counter end={210} suffix="+" title="Aliados" />
      <Counter end={190} suffix="+" title="Casos Ganados" />
    </section>
  );
}
