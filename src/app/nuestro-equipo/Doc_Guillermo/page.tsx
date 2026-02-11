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
          {/* TEXTO HERO */}
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroName}>Guillermo Rodríguez</h1>

            <h2 className={styles.heroRole}>
              Especialista en Derecho de Familia y Derecho Laboral
            </h2>

            <p className={styles.heroMeta}>
              Más de 10 años de experiencia · Asesoría y litigio judicial y
              extrajudicial · Atención nacional
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
              src="/doct-guillermo.jpeg"
              alt="Guillermo Rodríguez especialista en derecho de familia y derecho laboral en Colombia"
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
              Guillermo Rodríguez es abogado con más de 10 años de experiencia
              en Derecho de Familia, Derecho Laboral y Seguridad Social...
            </p>
          </div>

          {/* COLUMNA DERECHA */}
          <div className={styles.compactRight}>
            <div>
              <h3 className={styles.subTitle}>Áreas de Especialidad</h3>
              <ul className={styles.compactList}>
                <li>
                  Divorcios, custodia, régimen de visitas y cuotas alimentarias
                </li>
                <li>
                  Sucesiones, liquidación de sociedades conyugales y patrimonios
                  de hecho
                </li>
                <li>Derecho laboral individual y colectivo</li>
                <li>
                  Contratos laborales, despidos y reclamaciones de acreencias
                  laborales
                </li>
                <li>Prevención, investigación y atención de acoso laboral</li>
                <li>Accidentes de trabajo y riesgos laborales</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.subTitle}>Enfoque de Trabajo</h3>
              <ul className={styles.compactList}>
                <li>
                  Enfoque preventivo y conciliador para resolver conflictos con
                  el menor impacto emocional y empresarial posible
                </li>
                <li>
                  Diseño de soluciones jurídicas personalizadas, alineadas con
                  la normativa vigente y los objetivos del cliente
                </li>
                <li>
                  Protección integral de los derechos de familias, empleados y
                  empleadores
                </li>
                <li>
                  Acompañamiento cercano durante todo el proceso, con
                  comunicación clara y estratégica
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
