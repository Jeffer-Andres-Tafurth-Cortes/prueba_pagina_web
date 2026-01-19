import { motion } from "framer-motion";
import styles from "./styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Video de fondo */}
      <video className={styles.videoBg} autoPlay muted loop playsInline>
        <source src="/video-intro.mp4" type="video/mp4" />
      </video>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.mainTitle}>
          PRAVICE <br /> Donde tu problema legal encuentra solución real
        </h1>

        <p className={styles.paragraph}>
          Sabemos que cuando enfrentas un problema legal no solo está en juego
          tu patrimonio, tu tranquilidad o tu futuro. También existe un miedo
          constante: poner tu caso en manos de un abogado que no tenga la
          experiencia ni el conocimiento específico que tu situación requiere.
        </p>

        <p className={styles.paragraph}>
          Por eso, en PRAVICE no asignamos tu caso al azar. Te asignamos un
          abogado especialista en tu tipo de problema, que diseña una estrategia
          a tu medida, defiende tus intereses con criterio experto y actúa con
          firmeza hasta lograr el mejor resultado posible.
        </p>

        <p className={styles.finalPhrase}>
          No dejes tu caso en manos de cualquiera.
          <br />
          <strong>Déjalo en manos de especialistas.</strong>
        </p>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </motion.div>
    </section>
  );
}
