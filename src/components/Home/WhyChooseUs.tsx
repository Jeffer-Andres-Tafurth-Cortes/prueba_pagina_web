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
      <div className={styles.left}>
        <h2 className={styles.title}>¿Por qué elegirnos?</h2>
        <hr className={styles.underline} />
        <p className={styles.description}>
          Con más de 25 años de experiencia, en Pravice Abogados nos destacamos
          por brindar asesoría legal especializada, estratégica y personalizada.
          Nuestro compromiso es ofrecer soluciones efectivas que protejan los
          intereses de nuestros clientes y garanticen resultados óptimos en cada
          caso.
        </p>

        <ul className={styles.bulletList}>
          <li>
            <FontAwesomeIcon icon={faBalanceScale} className={styles.icon} />
            <strong>Experiencia comprobada</strong> – Más de 25 años asesorando
            empresas y personas en diversas áreas del derecho.
          </li>
          <li>
            <FontAwesomeIcon icon={faGavel} className={styles.icon} />
            <strong>Enfoque estratégico</strong> – Soluciones adaptadas a las
            necesidades de cada cliente para obtener los mejores resultados.
          </li>
          <li>
            <FontAwesomeIcon icon={faUniversity} className={styles.icon} />
            <strong>Acompañamiento integral</strong> – Desde la primera consulta
            hasta la resolución del caso, siempre a tu lado.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandcuffs} className={styles.icon} />
            <strong>Resultados exitosos</strong> – Un historial sólido de casos
            resueltos con éxito en diferentes áreas legales.
          </li>
        </ul>

        <button className={styles.button} onClick={handleClick}>
          CONOCE MÁS
        </button>
      </div>

      {/* Aquí va el bloque derecho horario con estilos previos */}
      <aside className={styles.right}>
        <h3 className={styles.scheduleTitle}>Horario de atención</h3>
        <ul className={styles.scheduleList}>
          <li>
            <span>Lunes</span> <span>08:00 AM - 06:00 PM</span>
          </li>
          <li>
            <span>Martes</span> <span>08:00 AM - 06:00 PM</span>
          </li>
          <li>
            <span>Miércoles</span> <span>08:00 AM - 06:00 PM</span>
          </li>
          <li>
            <span>Jueves</span> <span>08:00 AM - 06:00 PM</span>
          </li>
          <li>
            <span>Viernes</span> <span>08:00 AM - 06:00 PM</span>
          </li>
          <li>
            <span>Sábado</span> <span>08:00 AM - 01:00 PM</span>
          </li>
          <li>
            <span>Domingo</span> <span>Cerrado</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}
