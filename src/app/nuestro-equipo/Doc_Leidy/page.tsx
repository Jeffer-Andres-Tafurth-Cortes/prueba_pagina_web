"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";

export default function LeydiTirado() {
  return (
    <main className={styles.pageWrapper}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroName}>Leidy Tirado</h1>

            <h2 className={styles.heroRole}>
              Directora Área Comercial · Abogada especialista en Derecho
              Comercial y Protección al Consumidor en Colombia
            </h2>

            <p className={styles.heroMeta}>
              Abogada Universidad Militar · Sede en Bogotá · Atención nacional
              remota
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
              src="/doc-leidy.jpeg"
              alt="Leydi Tirado abogada especialista en derecho comercial y protección al consumidor en Colombia"
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
          Leydi Tirado es abogada de la Universidad Militar, experta en gestión
          comercial, con profundo conocimiento en la Ley 1480 de 2011 (Estatuto
          del Consumidor) y en garantías mobiliarias. Desde la dirección del
          área comercial, acompaña a empresas en el cumplimiento de regulaciones
          comerciales, protección de derechos del consumidor y optimización de
          procesos contractuales, brindando seguridad jurídica en un entorno
          empresarial dinámico.
        </p>
      </section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <section className={styles.specialtiesSection}>
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          <li>Derecho comercial y empresarial.</li>
          <li>Protección al consumidor (Ley 1480 de 2011).</li>
          <li>Recuperación de cartera y cobro jurídico.</li>
          <li>Diseño y revisión de contratos comerciales.</li>
        </ul>
      </section>

      {/* =========================
          ENFOQUE DE TRABAJO
      ========================== */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          <li>Visión jurídica con criterio comercial.</li>
          <li>Lenguaje claro para gerencias y equipos comerciales.</li>
          <li>Orientada a resultados y prevención de litigios innecesarios.</li>
          <li>
            Acompañamiento estratégico para fortalecer la seguridad jurídica
            empresarial.
          </li>
        </ul>
      </section>
    </main>
  );
}
