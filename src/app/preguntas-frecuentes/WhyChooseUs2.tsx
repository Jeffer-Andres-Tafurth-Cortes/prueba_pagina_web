import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/WhyChooseUs2.module.css";
import Image from "next/image";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function WhyChooseUs() {
  return (
    <section className={styles.container}>
      {/* Texto a la izquierda */}
      <div className={styles.textSection}>
        <h2 className={styles.title}>¿Por qué Elegir Nuestra Defensa Legal?</h2>
        <hr className={styles.line} />
        <p>
          En Pravice Abogados sabemos que enfrentar un proceso legal puede
          generar incertidumbre y preocupación. Por eso, ofrecemos una defensa
          legal basada en la confianza, el compromiso y la experiencia.
        </p>
        <p>
          En Pravice Abogados protegemos tus derechos con estrategias jurídicas
          personalizadas, brindando acompañamiento constante y soluciones
          efectivas. Nos destacamos por nuestra transparencia, confidencialidad
          y compromiso, convirtiéndonos en tu aliado estratégico para defender
          lo que más te importa.
        </p>
        <ul className={styles.checkList}>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            Respuesta ágil y oportuna
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            Actualización constante
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            Defensa estratégica en litigios
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} className={styles.icon} />
            Servicios virtuales
          </li>
        </ul>
        <button className={styles.button} onClick={handleClick}>
          CONTÁCTANOS AHORA
        </button>
      </div>

      {/* Imagen a la derecha */}
      <div className={styles.imageSection}>
        <Image
          src="/pic-11.webp"
          alt="Abogada profesional"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </section>
  );
}
