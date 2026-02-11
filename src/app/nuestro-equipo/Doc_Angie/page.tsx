"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AngieRivera() {
  return (
    <main className={styles.pageWrapper}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* TEXTO HERO */}
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/contacto" className={styles.btnPrimary}>
                  Agendar Consulta
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="https://wa.me/57XXXXXXXXXX"
                  target="_blank"
                  className={styles.btnSecondary}
                >
                  WhatsApp
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* IMAGEN HERO */}
          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/doc-angie.jpg"
              alt="Angie Rivera abogada experta en gestión de cartera y derecho comercial en Colombia"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================
          SECCIÓN COMPACTA
      ========================== */}
      <motion.section
        className={styles.compactSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.compactContainer}>
          {/* COLUMNA IZQUIERDA */}
          <div className={styles.compactLeft}>
            <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

            <p className={styles.sectionText}>
              Angie Rivera es abogada experta en gestión de cartera,
              conciliaciones y acuerdos de pago. Se ha posicionado como
              especialista en derecho comercial y procesos ejecutivos, con
              destacada trayectoria en la recuperación de activos y resolución
              de conflictos financieros. Acompaña a empresas en la creación de
              estrategias efectivas que permiten recuperar liquidez de manera
              eficiente y jurídicamente segura.
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.compactRight}>
            <div>
              <h3 className={styles.subTitle}>Áreas de Especialidad</h3>
              <ul className={styles.compactList}>
                <li>Gestión de cartera y recuperación de activos</li>
                <li>Conciliaciones y acuerdos de pago</li>
                <li>Derecho comercial y procesos ejecutivos</li>
                <li>Resolución de conflictos financieros para empresas</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subTitle}>Enfoque de Trabajo</h3>
              <ul className={styles.compactList}>
                <li>Resultados medibles y verificables</li>
                <li>Negociación estratégica con deudores</li>
                <li>Soluciones adaptadas a cada empresa</li>
                <li>Atención remota con seguimiento continuo</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
