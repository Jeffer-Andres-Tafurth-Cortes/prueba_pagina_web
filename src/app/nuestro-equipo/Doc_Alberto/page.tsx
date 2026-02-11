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
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/doc-alberto.jpeg"
              alt="Alberto Castro abogado especialista en conciliación y recuperación de cartera en Colombia"
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

        <p className={styles.sectionText}>
          Alberto Castro es fundador de la firma y uno de los abogados expertos
          en conciliación y recuperación de cartera empresarial en Colombia.
          Cuenta con amplia experiencia en gestión de cobro jurídico,
          negociación estratégica y diseño de soluciones legales orientadas a
          resultados concretos para empresas que requieren procesos ágiles,
          estructurados y jurídicamente sólidos.
        </p>
      </motion.section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <motion.section
        className={styles.specialtiesSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          {[
            "Conciliación y resolución de conflictos empresariales",
            "Gestión de cobro jurídico y recuperación de cartera",
            "Diseño de estrategias legales personalizadas",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          {[
            "Enfoque práctico orientado a resultados medibles.",
            "Estrategias adaptadas a la realidad financiera de cada empresa.",
            "Negociación estratégica con deudores y acompañamiento legal continuo.",
            "Atención remota a nivel nacional con seguimiento personalizado.",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
