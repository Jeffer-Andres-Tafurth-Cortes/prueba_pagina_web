"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SantiagoFranco() {
  return (
    <main className={styles.pageWrapper}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroName}>Santiago Franco</h1>

            <h2 className={styles.heroRole}>
              Especialista en Derecho Penal, Compliance y Delitos Económicos
            </h2>

            <p className={styles.heroMeta}>
              Litigio penal estratégico · Gestión de riesgos legales · Atención
              nacional
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
              src="/doc-santiago.jpg"
              alt="Santiago Franco abogado especialista en derecho penal y compliance en Colombia"
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
          Santiago Franco es abogado con sólida trayectoria en Derecho Penal,
          Derecho Penal Militar, Derecho Informático y Compliance. Especialista
          en la prevención, detección y gestión de riesgos legales asociados a
          delitos económicos y tecnológicos. Ha liderado litigios penales de
          alta complejidad, representando tanto a personas naturales como
          jurídicas en investigaciones y procesos judiciales, destacándose por
          su enfoque estratégico, técnico y orientado a la protección jurídica y
          reputacional.
        </p>
      </section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <section className={styles.specialtiesSection}>
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          <li>Derecho Penal y Derecho Penal Militar.</li>
          <li>Delitos económicos y financieros.</li>
          <li>Delitos informáticos y cibercrimen.</li>
          <li>Responsabilidad penal derivada del uso de tecnologías.</li>
          <li>Diseño e implementación de programas de Compliance.</li>
          <li>Gestión de riesgos legales corporativos.</li>
        </ul>
      </section>

      {/* =========================
          ENFOQUE DE TRABAJO
      ========================== */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          <li>
            Enfoque estratégico y técnico en litigios penales de alta
            complejidad.
          </li>
          <li>
            Prevención de riesgos mediante programas de cumplimiento normativo
            alineados a estándares internacionales.
          </li>
          <li>
            Acompañamiento integral a personas y empresas en investigaciones y
            procesos penales.
          </li>
          <li>
            Protección jurídica y reputacional en escenarios de alto impacto
            mediático y corporativo.
          </li>
        </ul>
      </section>
    </main>
  );
}
