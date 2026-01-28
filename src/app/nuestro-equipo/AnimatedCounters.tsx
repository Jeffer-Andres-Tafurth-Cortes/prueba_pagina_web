"use client";

import { useState, useEffect } from "react";
import styles from "./styles/AnimatedCounters.module.css";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  title: string;
  ariaLabel: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 5000,
  title,
  ariaLabel,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 30;
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
    <div className={styles.counterCard} role="group" aria-label={ariaLabel}>
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
    <section className={styles.container} aria-labelledby="experience-title">
      <div className={styles.textWrapper}>
        <h2 id="experience-title" className={styles.subtitle}>
          Más de 20 años de experiencia jurídica comprobada
        </h2>

        <p className={styles.text}>
          En <strong>Pravice Abogados</strong> contamos con una trayectoria
          sólida asesorando y representando a personas y empresas en{" "}
          <strong>derecho laboral, civil y asesoría legal integral</strong>.
          Nuestra experiencia se refleja en resultados reales, estrategias
          jurídicas efectivas y una atención profesional personalizada.
        </p>

        <p className={styles.text}>
          Cada caso es abordado con rigor técnico, ética profesional y un
          enfoque orientado a la protección de los intereses de nuestros
          clientes, consolidándonos como una firma legal confiable y reconocida.
        </p>
      </div>

      <div className={styles.countersWrapper}>
        <Counter
          end={99}
          suffix="%"
          title="Clientes satisfechos"
          ariaLabel="Porcentaje de clientes satisfechos"
        />

        <Counter
          end={210}
          suffix="+"
          title="Aliados estratégicos"
          ariaLabel="Cantidad de aliados estratégicos"
        />

        <Counter
          end={190}
          suffix="+"
          title="Casos ganados"
          ariaLabel="Número de casos legales ganados"
        />
      </div>
    </section>
  );
}
