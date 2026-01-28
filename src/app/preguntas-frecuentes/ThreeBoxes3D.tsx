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
    "_blank",
  );
};

export default function ThreeBoxes3D() {
  return (
    <section className={styles.container} aria-labelledby="legal-values-title">
      {/* Título SEO invisible o visible según diseño */}
      <h2 id="legal-values-title" className="sr-only">
        Valores y ventajas de nuestros abogados
      </h2>

      {/* GRID */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* CARD 1 */}
        <motion.article
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          aria-label="Asesoría legal integral y personalizada"
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faAward} className={styles.icon} />
              <h3 className={styles.title}>
                Asesoría legal integral y personalizada
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Brindamos asesoría jurídica especializada, adaptada a las
                necesidades de cada cliente, con acompañamiento cercano y
                soluciones legales efectivas.
              </p>
            </div>

            <div className={styles.back}>
              <h3 className={styles.title}>Asesoría legal a la medida</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Analizamos cada caso de forma detallada para ofrecer estrategias
                jurídicas personalizadas, garantizando atención clara, oportuna
                y confiable.
              </p>
            </div>
          </div>
        </motion.article>

        {/* CARD 2 */}
        <motion.article
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          aria-label="Experiencia y compromiso legal"
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
              <h3 className={styles.title}>
                Experiencia y compromiso jurídico
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Nuestro equipo está conformado por abogados con amplia
                experiencia, comprometidos con la defensa de los derechos e
                intereses de nuestros clientes.
              </p>
            </div>

            <div className={styles.back}>
              <h3 className={styles.title}>Abogados con trayectoria</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Contamos con una sólida trayectoria en diversas áreas del
                derecho, ofreciendo respaldo legal confiable y estrategias
                efectivas.
              </p>
            </div>
          </div>
        </motion.article>

        {/* CARD 3 */}
        <motion.article
          className={styles.cardWrapper}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          aria-label="Prevención y estrategia legal"
        >
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
              <h3 className={styles.title}>Prevención y estrategia legal</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                No solo resolvemos conflictos legales, también brindamos
                asesoría preventiva para minimizar riesgos jurídicos futuros.
              </p>
            </div>

            <div className={styles.back}>
              <h3 className={styles.title}>Seguridad jurídica a largo plazo</h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                Ayudamos a tomar decisiones legales informadas que protegen tu
                patrimonio, empresa y derechos desde una perspectiva
                estratégica.
              </p>
            </div>
          </div>
        </motion.article>
      </motion.div>

      {/* CTA */}
      <motion.div
        className={styles.ctaContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button
          className={styles.ctaButton}
          onClick={handleClick}
          aria-label="Agendar consulta con abogados especializados"
        >
          Agende su consulta legal
        </button>
      </motion.div>
    </section>
  );
}
