"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBalanceScale,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/ThreeBoxes3D.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function ThreeBoxes3D() {
  return (
    <section className={styles.container}>
      {/* GRID con animación stagger */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Caja 1 */}
        <motion.div
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faAward} className={styles.icon} />
              <h3 className={styles.title}>
                ASESORÍA INTEGRAL Y PERSONALIZADA
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Ofrecemos soluciones legales adaptadas a las necesidades
                específicas de cada cliente, con un acompañamiento cercano en
                cada etapa del proceso.
              </p>
            </div>
            <div className={styles.back}>
              <h3 className={styles.title}>
                ASESORÍA INTEGRAL Y PERSONALIZADA
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Cada cliente y cada caso son únicos. Analizamos tu situación a
                fondo para ofrecer soluciones legales a la medida, garantizando
                atención cercana y oportuna.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Caja 2 */}
        <motion.div
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
              <h3 className={styles.title}>EXPERIENCIA Y COMPROMISO</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Nuestro equipo está conformado por abogados con amplia
                trayectoria, enfocados en proteger los intereses de nuestros
                clientes con ética y profesionalismo.
              </p>
            </div>
            <div className={styles.back}>
              <h3 className={styles.title}>EXPERIENCIA Y COMPROMISO</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Contamos con años de experiencia en diversas áreas del derecho,
                brindando un respaldo legal sólido para proteger tus derechos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Caja 3 */}
        <motion.div
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
              <h3 className={styles.title}>
                ATENCIÓN PREVENTIVA Y ESTRATÉGICA
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                No solo resolvemos conflictos: brindamos asesoría preventiva
                para evitar riesgos legales que puedan afectar tu empresa o vida
                personal.
              </p>
            </div>
            <div className={styles.back}>
              <h3 className={styles.title}>
                ATENCIÓN PREVENTIVA Y ESTRATÉGICA
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Ayudamos a prevenir riesgos legales mediante asesoría continua,
                permitiéndote tomar decisiones informadas que minimicen futuros
                problemas.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* CTA BUTTON */}
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </motion.div>
    </section>
  );
}
