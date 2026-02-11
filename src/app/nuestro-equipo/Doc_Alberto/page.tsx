"use client";

import styles from "../Abogado.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AlbertoCastro() {
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
            <h1 className={styles.heroName}>Alberto Castro</h1>

            <h2 className={styles.heroRole}>
              Abogado especialista en conciliación y recuperación de cartera en
              Colombia
            </h2>

            <p className={styles.heroMeta}>
              Fundador de la firma · Sede en Bogotá · Atención nacional remota
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
              src="/doc-alberto.jpeg"
              alt="Alberto Castro abogado especialista en conciliación y recuperación de cartera en Colombia"
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
              Alberto Castro es fundador de la firma y uno de los abogados
              expertos en conciliación y recuperación de cartera empresarial en
              Colombia. Cuenta con amplia experiencia en gestión de cobro
              jurídico, negociación estratégica y diseño de soluciones legales
              orientadas a resultados concretos para empresas que requieren
              procesos ágiles, estructurados y jurídicamente sólidos.
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.compactRight}>
            <div>
              <h3 className={styles.subTitle}>Áreas de Especialidad</h3>
              <ul className={styles.compactList}>
                <li>Conciliación empresarial</li>
                <li>Gestión de cobro jurídico</li>
                <li>Recuperación de cartera</li>
                <li>Estrategias legales personalizadas</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subTitle}>Enfoque</h3>
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
