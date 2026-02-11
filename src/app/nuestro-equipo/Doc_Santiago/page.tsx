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
          {/* TEXTO HERO */}
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroName}>Santiago Franco</h1>

            <h2 className={styles.heroRole}>
              Especialista en Derecho Penal, Compliance y Delitos Económicos
            </h2>

            <p className={styles.heroMeta}>
              Litigio penal estratégico · Gestión de riesgos legales · Atención
              nacional
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
              src="/doc-santiago.jpg"
              alt="Santiago Franco abogado especialista en derecho penal y compliance en Colombia"
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
              Santiago Franco es abogado con sólida trayectoria en Derecho
              Penal, Derecho Penal Militar, Derecho Informático y Compliance...
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.compactRight}>
            <div>
              <h3 className={styles.subTitle}>Áreas de Especialidad</h3>
              <ul className={styles.compactList}>
                <li>Derecho Penal y Derecho Penal Militar</li>
                <li>Delitos económicos y financieros</li>
                <li>Responsabilidad penal derivada del uso de tecnologías</li>
                <li>Gestión de riesgos legales corporativos</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subTitle}>Enfoque de Trabajo</h3>
              <ul className={styles.compactList}>
                <li>
                  Enfoque estratégico y técnico en litigios penales de alta
                  complejidad
                </li>
                <li>
                  Prevención de riesgos mediante programas de cumplimiento
                  normativo alineados a estándares internacionales
                </li>
                <li>
                  Acompañamiento integral a personas y empresas en
                  investigaciones y procesos penales
                </li>
                <li>
                  Protección jurídica y reputacional en escenarios de alto
                  impacto mediático y corporativo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
