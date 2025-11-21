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
          Agenda tu consulta con nuestros expertos y obtén la mejor solución
          legal.
        </p>
        <button className={styles.ctaButton} onClick={handleClick}>
          ¡Haz clic aquí!
        </button>
      </motion.div>
    </section>
  );
}
