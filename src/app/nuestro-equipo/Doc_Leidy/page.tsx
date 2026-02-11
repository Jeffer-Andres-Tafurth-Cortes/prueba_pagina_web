"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LeidyTirado() {
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
              src="/doc-leidy.jpeg"
              alt="Leydi Tirado abogada especialista en derecho comercial y protección al consumidor en Colombia"
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
              Leidy Tirado es abogada de la Universidad Militar, experta en
              gestión comercial, con profundo conocimiento en la Ley 1480 de
              2011 (Estatuto del Consumidor) y en garantías mobiliarias...
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.compactRight}>
            <div>
              <h3 className={styles.subTitle}>Áreas de Especialidad</h3>
              <ul className={styles.compactList}>
                <li>Derecho comercial y empresarial</li>
                <li>Protección al consumidor (Ley 1480 de 2011)</li>
                <li>Recuperación de cartera y cobro jurídico</li>
                <li>Diseño y revisión de contratos comerciales</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subTitle}>Enfoque de Trabajo</h3>
              <ul className={styles.compactList}>
                <li>Visión jurídica con criterio comercial</li>
                <li>Lenguaje claro para gerencias y equipos comerciales</li>
                <li>
                  Orientada a resultados y prevención de litigios innecesarios
                </li>
                <li>
                  Acompañamiento estratégico para fortalecer la seguridad
                  jurídica empresarial
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
