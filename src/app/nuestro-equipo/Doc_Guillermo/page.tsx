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
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className={styles.heroName}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Guillermo Rodríguez
            </motion.h1>

            <motion.h2
              className={styles.heroRole}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Especialista en Derecho de Familia y Derecho Laboral
            </motion.h2>

            <motion.p
              className={styles.heroMeta}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Más de 10 años de experiencia · Asesoría y litigio judicial y
              extrajudicial · Atención nacional
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
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img
              src="/doct-guillermo.jpeg"
              alt="Guillermo Rodríguez especialista en derecho de familia y derecho laboral en Colombia"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================
          PERFIL PROFESIONAL
      ========================== */}
      <motion.section
        className={styles.profileSection}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Perfil Profesional</h2>

        <p className={styles.sectionText}>
          Guillermo Rodríguez es abogado con más de 10 años de experiencia en
          Derecho de Familia, Derecho Laboral y Seguridad Social...
        </p>
      </motion.section>

      {/* =========================
          ESPECIALIDADES
      ========================== */}
      <motion.section
        className={styles.specialtiesSection}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Áreas de Especialidad</h2>

        <ul className={styles.approachList}>
          {[
            "Divorcios, custodia, régimen de visitas y cuotas alimentarias.",
            "Sucesiones, liquidación de sociedades conyugales y patrimonios de hecho.",
            "Derecho laboral individual y colectivo.",
            "Contratos laborales, despidos y reclamaciones de acreencias laborales.",
            "Prevención, investigación y atención de acoso laboral.",
            "Accidentes de trabajo y riesgos laborales.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
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
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Enfoque de Trabajo</h2>

        <ul className={styles.approachList}>
          {[
            "Enfoque preventivo y conciliador para resolver conflictos con el menor impacto emocional y empresarial posible.",
            "Diseño de soluciones jurídicas personalizadas, alineadas con la normativa vigente y los objetivos del cliente.",
            "Protección integral de los derechos de familias, empleados y empleadores.",
            "Acompañamiento cercano durante todo el proceso, con comunicación clara y estratégica.",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
