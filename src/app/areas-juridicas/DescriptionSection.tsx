"use client";

import { motion } from "framer-motion";
import styles from "./styles/DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <section className={styles.container}>
      {/* TÍTULO SEO */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Abogados especializados
        <br /> con resultados comprobados
      </motion.h2>

      {/* PRIMER PÁRRAFO SEO */}
      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        En <strong>Pravice Abogados</strong> somos una firma legal comprometida
        con la defensa de los derechos de personas y empresas, ofreciendo{" "}
        <span className={styles.highlight}>
          asesoría jurídica estratégica, ética y orientada a resultados.
        </span>{" "}
        Analizamos cada caso de manera rigurosa para diseñar soluciones legales
        sólidas, claras y efectivas.
      </motion.p>

      {/* SEGUNDO PÁRRAFO SEO */}
      <motion.p
        className={styles.textSecondary}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Contamos con experiencia en derecho laboral, civil, empresarial y cobro
        de cartera, brindando acompañamiento legal personalizado, prevención de
        riesgos jurídicos y representación profesional en cada etapa del
        proceso.
      </motion.p>
    </section>
  );
}
