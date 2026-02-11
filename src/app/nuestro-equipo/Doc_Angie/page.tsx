"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";

export default function AngieRivera() {
  return (
    <main className={styles.pageWrapper}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroName}>Angie Rivera</h1>

            <h2 className={styles.heroRole}>
              Abogada experta en gestión de cartera, conciliaciones y derecho
              comercial en Colombia
            </h2>

            <p className={styles.heroMeta}>
              Especialista en recuperación de activos · Sede en Bogotá ·
              Atención nacional remota
            </p>

            <div className={styles.heroButtons}>
              <Link href="/contacto" className={styles.btnPrimary}>
                Agendar Consulta
              </Link>

              <Link
                href="https://wa.me/57XXXXXXXXXX"
                target="_blank"
                className={styles.btnSecondary}
              >
                WhatsApp
              </Link>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              src="/doc-angie.jpg"
              alt="Angie Rivera abogada experta en gestión de cartera y derecho comercial en Colombia"
            />
          </div>
        </div>
      </section>

      {/* =========================
          PERFIL PROFESIONAL
      ========================== */}
      <section className={styles.profileSection}>
        <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

        <p className={styles.sectionText}>
          Angie Rivera es abogada experta en gestión de cartera, conciliaciones
          y acuerdos de pago. Se ha posicionado como especialista en derecho
          comercial y procesos ejecutivos, con destacada trayectoria en la
          recuperación de activos y resolución de conflictos financieros.
          Acompaña a empresas en la creación de estrategias efectivas que
          permiten recuperar liquidez de manera eficiente y jurídicamente
          segura.
        </p>
      </section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <section className={styles.specialtiesSection}>
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          <li>Gestión de cartera y recuperación de activos.</li>
          <li>Conciliaciones y acuerdos de pago.</li>
          <li>Derecho comercial y procesos ejecutivos.</li>
          <li>Resolución de conflictos financieros para empresas.</li>
        </ul>
      </section>

      {/* =========================
          ENFOQUE DE TRABAJO
      ========================== */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          <li>Enfoque práctico y personalizado para cada caso.</li>
          <li>Optimización de la gestión de cobros empresariales.</li>
          <li>
            Diseño de soluciones estratégicas alineadas con los objetivos de
            cada empresa.
          </li>
          <li>
            Compromiso con el éxito empresarial y la recuperación efectiva de
            activos.
          </li>
        </ul>
      </section>
    </main>
  );
}
