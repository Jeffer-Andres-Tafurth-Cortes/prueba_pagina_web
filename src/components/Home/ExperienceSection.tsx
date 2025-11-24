import React, { useState, useEffect } from "react";
import styles from "./styles/ExperienceSection.module.css";
import "../../../public/Estatua.png";

interface CounterProps {
  end: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // Duración total de la animación en ms
    const incrementTime = 20; // Intervalo entre incrementos en ms
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default function ExperienceSection() {
  return (
    <>
      <h2 className={styles.title}>¿POR QUE ELEGIRNOS?</h2>

      <section className={styles.container}>
        <div className={styles.textSection}>
          <h2>
            25 años de experiencia <br /> protegiendo los intereses <br /> de
            nuestros clientes.
          </h2>
          <p>
            En <strong>Pravice Abogados</strong> contamos con una trayectoria
            destacada en el ámbito legal, asesorando a empresas y personas en
            diversas áreas del derecho. Nuestro equipo está conformado por
            profesionales con amplia experiencia, que brindan soluciones
            estratégicas adaptadas a las necesidades de cada cliente.
          </p>

          <div className={styles.counters}>
            <div className={styles.counterBox}>
              <h3>
                <Counter end={210} suffix="+" />
              </h3>
              <p>
                <strong>Aliados</strong>
              </p>
            </div>
            <div className={styles.counterBox}>
              <h3>
                <Counter end={190} suffix="+" />
              </h3>
              <p>
                <strong>Casos jurídicos</strong>
              </p>
            </div>
            <div className={styles.counterBox}>
              <h3>
                <Counter end={100} suffix="+" />
              </h3>
              <p>
                <strong>Casos ganados</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
