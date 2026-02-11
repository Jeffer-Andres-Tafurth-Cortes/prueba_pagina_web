"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GuillermoRodriguez() {
  return (
    <main className={styles.pageWrapper}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroName}>Guillermo Rodríguez</h1>

            <h2 className={styles.heroRole}>
              Especialista en Derecho de Familia y Derecho Laboral
            </h2>

            <p className={styles.heroMeta}>
              Más de 10 años de experiencia · Asesoría y litigio judicial y
              extrajudicial · Atención nacional
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
              src="/doct-guillermo.jpeg"
              alt="Guillermo Rodríguez especialista en derecho de familia y derecho laboral en Colombia"
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
          Guillermo Rodríguez es abogado con más de 10 años de experiencia en
          Derecho de Familia, Derecho Laboral y Seguridad Social. Cuenta con una
          sólida trayectoria en asesoría y representación judicial y
          extrajudicial, destacándose por su enfoque técnico, preventivo y
          estratégico. Su práctica combina firmeza jurídica y sensibilidad
          humana en asuntos familiares, junto con un criterio técnico
          especializado en relaciones laborales, protección de derechos y
          gestión preventiva de riesgos empresariales.
        </p>
      </section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <section className={styles.specialtiesSection}>
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          <li>
            Divorcios, custodia, régimen de visitas y cuotas alimentarias.
          </li>
          <li>
            Sucesiones, liquidación de sociedades conyugales y patrimonios de
            hecho.
          </li>
          <li>Derecho laboral individual y colectivo.</li>
          <li>
            Contratos laborales, despidos y reclamaciones de acreencias
            laborales.
          </li>
          <li>Prevención, investigación y atención de acoso laboral.</li>
          <li>Accidentes de trabajo y riesgos laborales.</li>
        </ul>
      </section>

      {/* =========================
          ENFOQUE DE TRABAJO
      ========================== */}
      <section className={styles.approachSection}>
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          <li>
            Enfoque preventivo y conciliador para resolver conflictos con el
            menor impacto emocional y empresarial posible.
          </li>
          <li>
            Diseño de soluciones jurídicas personalizadas, alineadas con la
            normativa vigente y los objetivos del cliente.
          </li>
          <li>
            Protección integral de los derechos de familias, empleados y
            empleadores.
          </li>
          <li>
            Acompañamiento cercano durante todo el proceso, con comunicación
            clara y estratégica.
          </li>
        </ul>
      </section>
    </main>
  );
}
