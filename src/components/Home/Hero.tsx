import { motion } from "framer-motion";
import styles from "./styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
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
        <p className={styles.subtitle}>Bienvenidos a nuestra Firma</p>
        <h1 className={styles.title}>
          Especialistas en cada caso, excelencia en cada resultado
        </h1>
        <p className={styles.subtitle}>
          Estamos aquí para escucharte, asesorarte y guiarte con la seguridad de
          contar con especialistas dedicados a obtener el mejor resultado
          posible. Da el primer paso hacia la solución legal que necesitas.
        </p>
        <button className={styles.ctaButton} onClick={handleClick}>
          Agenda tu asesoría
        </button>
      </motion.div>
    </section>
  );
}
