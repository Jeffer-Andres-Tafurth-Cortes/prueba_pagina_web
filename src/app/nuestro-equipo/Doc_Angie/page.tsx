"use client";

import { motion } from "framer-motion";
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
            <motion.h1
              className={styles.heroName}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Angie Rivera
            </motion.h1>

            <motion.h2
              className={styles.heroRole}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Abogada experta en gestión de cartera, conciliaciones y derecho
              comercial en Colombia
            </motion.h2>

            <motion.p
              className={styles.heroMeta}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Especialista en recuperación de activos · Sede en Bogotá ·
              Atención nacional remota
            </motion.p>

            <motion.div
              className={styles.heroButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/contacto" className={styles.btnPrimary}>
                  Agendar Consulta
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="https://wa.me/57XXXXXXXXXX"
                  target="_blank"
                  className={styles.btnSecondary}
                >
                  WhatsApp
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/doc-angie.jpg"
              alt="Angie Rivera abogada experta en gestión de cartera y derecho comercial en Colombia"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================
          PERFIL PROFESIONAL
      ========================== */}
      <motion.section
        className={styles.profileSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
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
      </motion.section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <motion.section
        className={styles.specialtiesSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          {[
            "Gestión de cartera y recuperación de activos.",
            "Conciliaciones y acuerdos de pago.",
            "Derecho comercial y procesos ejecutivos.",
            "Resolución de conflictos financieros para empresas.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* =========================
          ENFOQUE DE TRABAJO
      ========================== */}
      <motion.section
        className={styles.approachSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          {[
            "Enfoque práctico y personalizado para cada caso.",
            "Optimización de la gestión de cobros empresariales.",
            "Diseño de soluciones estratégicas alineadas con los objetivos de cada empresa.",
            "Compromiso con el éxito empresarial y la recuperación efectiva de activos.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
