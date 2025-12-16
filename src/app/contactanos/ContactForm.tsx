"use client";

import styles from "./styles/ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faClock,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      {/* Contenedor blanco con formulario y detalles */}
      <div className={styles.contactContainer}>
        {/* Izquierda */}
        <div className={styles.details}>
          <h2>Cuéntanos sobre tu caso</h2>

          <div className={styles.block}>
            <h3>
              <span role="img" aria-label="contacto">
                <FontAwesomeIcon icon={faContactCard} className={styles.icon} />
              </span>{" "}
              Detalles de contacto
            </h3>
            <p>Dirección : Calle 98 # 22-64 Bogotá D.C., Colombia</p>
            <p>Número : +57 311 4659315</p>
            <p>Email : info.pravice@abogadosespecialistas.com.co</p>
          </div>

          <div className={styles.block}>
            <h3>
              <span role="img" aria-label="hora">
                <FontAwesomeIcon icon={faClock} className={styles.icon} />
              </span>{" "}
              Horario de atención
            </h3>
            <p>Lunes a Viernes: 9.00 AM – 5.00 PM</p>
            <p>Sabados: 10.00 AM – 2.00 PM</p>
            <p>Domingos: No hay atención</p>
          </div>

          <div className={styles.block}>
            <h3>
              <span role="img" aria-label="síguenos">
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
              </span>{" "}
              Síguenos
            </h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
              </a>
              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>

        {/* Derecha */}
        <form className={styles.form}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">¿Cómo podemos ayudarte?</label>
          <textarea id="message" name="message" rows={6} required />

          <button type="submit" className={styles.button}>
            ENVIAR
          </button>
        </form>
      </div>

      {/* Mapa abajo, ocupa todo el ancho y tiene altura fija */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.109956055285!2d-74.0682596847268!3d4.683442843420134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a57dd304955%3A0xbb1c4ac13f4a546!2sCalle%2098%20%2322-64%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1690660911728!5m2!1ses!2sco"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Pravice Abogados"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default ContactSection;
