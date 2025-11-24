import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faGavel,
  faUniversity,
  faHandcuffs,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/WhyChooseUs.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function WhyChooseUs() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {/* Línea decorativa */}
        <div className={styles.decorLine}></div>

        <div className={styles.content}>
          <hr className={styles.underline} />

          <p className={styles.description}>
            Con más de 25 años de experiencia, en Pravice Abogados nos
            destacamos por brindar asesoría legal especializada, estratégica y
            personalizada. Nuestro compromiso es ofrecer soluciones efectivas
            que protejan los intereses de nuestros clientes y garanticen
            resultados óptimos en cada caso.
          </p>

          <ul className={styles.bulletList}>
            <li>
              <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
              <div>
                <strong>Experiencia comprobada</strong>
                <p>
                  Más de 25 años asesorando empresas y personas en diversas
                  áreas del derecho.
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faGavel} className={styles.icon} />
              <div>
                <strong>Enfoque estratégico</strong>
                <p>
                  Soluciones adaptadas a cada cliente para obtener resultados
                  óptimos.
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faUniversity} className={styles.icon} />
              <div>
                <strong>Acompañamiento integral</strong>
                <p>
                  Te acompañamos desde la primera consulta hasta la resolución
                  del caso.
                </p>
              </div>
            </li>

            <li>
              <FontAwesomeIcon icon={faHandcuffs} className={styles.icon} />
              <div>
                <strong>Resultados exitosos</strong>
                <p>Historial sólido de casos resueltos con éxito.</p>
              </div>
            </li>
          </ul>

          <button className={styles.button} onClick={handleClick}>
            AGENDA UNA ASESORÍA
          </button>
        </div>
      </div>
    </section>
  );
}
