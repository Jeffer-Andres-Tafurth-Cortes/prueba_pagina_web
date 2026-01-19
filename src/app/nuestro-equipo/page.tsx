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
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.mapTitle}>Nuestra oficina</h3>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  );
}
