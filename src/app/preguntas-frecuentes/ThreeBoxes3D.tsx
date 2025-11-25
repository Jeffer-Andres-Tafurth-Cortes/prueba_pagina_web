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
      <div className={styles.grid}>
        {/* Caja 1  */}
        <div className={styles.cardWrapper}>
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
                Cada cliente y cada caso son unicos. Analizamos a fondo tu
                situación para ofrecerles soluciones legales a la medida,
                garantizando una atencion cercana y oportuna en todo momento.
              </p>
            </div>
          </div>
        </div>

        {/* Caja 2*/}
        <div className={styles.cardWrapper}>
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
              <p>
                Nuestro equipo cuenta con años de trayectoria en diferentes
                áreas del derecho, brindando un respaldo legal sólido para
                proteger tus derechos e intereses con profesionalismo y
                transparencia.
              </p>
            </div>
          </div>
        </div>

        {/* Caja 3 */}
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.front}>
              <FontAwesomeIcon icon={faCheckDouble} className={styles.icon} />
              <h3 className={styles.title}>
                ATENCIÓN PREVENTIVA Y ESTRATÉGICA
              </h3>
              <hr className={styles.line} />
              <p className={styles.text}>
                No solo resolvemos conflictos, sino que también brindamos
                asesoría preventiva para evitar riesgos legales que pueden
                afectar tu empresa o vida personal.
              </p>
            </div>
            <div className={styles.back}>
              <h3 className={styles.title}>
                ATENCIÓN PREVENTIVA Y ESTRATÉGICA
              </h3>
              <hr className={styles.line} />
              <p>
                Más álla de resolver problemas legales, trabajamos para
                prevenirlos. A través de la asesoría continua, ayudamos a tu
                empresa o a ti como cliente particular a tomar decisiones
                informadas que minimicen riesgos laborales legales a futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </div>
    </section>
  );
}
