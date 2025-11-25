"use client";

import { useState, useEffect } from "react";
import styles from "./styles/AnimatedCounters.module.css";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  title: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  suffix = "",
  duration = 5000,
  title,
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
      <div className={styles.textWrapper}>
        <h3 className={styles.subtitle}>
          20 AÑOS DE EXCELENCIA Y COMPROMISO LEGAL
        </h3>

        <p className={styles.text}>
          Durante dos décadas hemos acompañado a empresas y personas en la
          resolución de casos complejos, brindando asesoría estratégica,
          representación sólida y un enfoque ético en cada etapa del proceso.
        </p>

        <p className={styles.text}>
          Nuestra experiencia es el resultado de cientos de casos exitosos, un
          equipo altamente capacitado y un compromiso inquebrantable con la
          justicia y la protección de los intereses de nuestros clientes.
        </p>
      </div>

      <div className={styles.countersWrapper}>
        <Counter end={99} suffix="%" title="CLIENTES SATISFECHOS" />
        <Counter end={210} suffix="+" title="ALIADOS ESTRATEGICOS" />
        <Counter end={190} suffix="+" title="CASOS GANADOS" />
      </div>
    </section>
  );
}
