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
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className={styles.heroName}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Santiago Franco
            </motion.h1>

            <motion.h2
              className={styles.heroRole}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Especialista en Derecho Penal, Compliance y Delitos Económicos
            </motion.h2>

            <motion.p
              className={styles.heroMeta}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Litigio penal estratégico · Gestión de riesgos legales · Atención
              nacional
            </motion.p>

            <motion.div
              className={styles.heroButtons}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
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
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/doc-santiago.jpg"
              alt="Santiago Franco abogado especialista en derecho penal y compliance en Colombia"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================
          PERFIL PROFESIONAL
      ========================== */}
      <motion.section
        className={styles.profileSection}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

        <p className={styles.sectionText}>
          Santiago Franco es abogado con sólida trayectoria en Derecho Penal,
          Derecho Penal Militar, Derecho Informático y Compliance...
        </p>
      </motion.section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <motion.section
        className={styles.specialtiesSection}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          {[
            "Derecho Penal y Derecho Penal Militar.",
            "Delitos económicos y financieros.",
            "Delitos informáticos y cibercrimen.",
            "Responsabilidad penal derivada del uso de tecnologías.",
            "Diseño e implementación de programas de Compliance.",
            "Gestión de riesgos legales corporativos.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
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
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          {[
            "Enfoque estratégico y técnico en litigios penales de alta complejidad.",
            "Prevención de riesgos mediante programas de cumplimiento normativo alineados a estándares internacionales.",
            "Acompañamiento integral a personas y empresas en investigaciones y procesos penales.",
            "Protección jurídica y reputacional en escenarios de alto impacto mediático y corporativo.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
