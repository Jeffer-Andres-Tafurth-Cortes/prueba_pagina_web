"use client";

import AnimatedCounters from "@/app/nuestro-equipo/AnimatedCounters";
import Team from "../../components/Home/Team";
import SkillProgress from "@/app/nuestro-equipo/SkillProgress";
import styles from "../page.module.css";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <div className="container" style={{ paddingTop: 120 }}>
      <Team />
      <AnimatedCounters />
      <SkillProgress />

      {/* MAPA */}
      <motion.section
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className={styles.mapSubtitle}>UBICACIÓN</span>

        <h3 className={styles.mapTitle}>
          Nuestra oficina en <strong>Bogotá</strong>
        </h3>

        <p className={styles.mapDescription}>
          Visítanos en nuestras oficinas y recibe asesoría legal personalizada.
          En <strong>Pravice Abogados</strong> estamos ubicados estratégicamente
          para brindarte atención profesional y oportuna.
        </p>

        <div className={styles.mapContainer}>
          <iframe
            title="Ubicación Pravice Abogados en Bogotá"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa de ubicación de Pravice Abogados"
          />
        </div>

        <a
          href="https://www.google.com/maps?q=Abogados+Especialistas+Pravice+Bogotá"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mapButton}
        >
          VER EN GOOGLE MAPS
        </a>
      </motion.section>
    </div>
  );
}
