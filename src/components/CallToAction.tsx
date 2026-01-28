"use client";

import styles from "../styles/CallToAction.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
};

function CallToAction() {
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-legal-title">
      <div className={styles.contentWrapper}>
        {/* TÍTULO SEO */}
        <h2 id="cta-legal-title" className={styles.mainText}>
          Agende su consulta legal con abogados especializados
        </h2>

        <div className={styles.divider}></div>

        {/* TEXTO DE CONFIANZA */}
        <p className={styles.bottomText}>
          Estamos listos para analizar su caso y brindarle una asesoría clara,
          profesional y confiable.
        </p>

        {/* TEXTO DE ACCIÓN */}
        <p className={styles.finalText}>
          ¿Necesita asesoría legal inmediata? Contáctenos ahora por WhatsApp.
        </p>

        {/* BOTÓN CTA */}
        <button
          className={styles.ctaButton}
          onClick={handleClick}
          aria-label="Agendar consulta legal por WhatsApp"
        >
          Agendar consulta legal
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
