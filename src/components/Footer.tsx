"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank",
  );
};

function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.topSection}>
        {/* LOGO Y DESCRIPCIÓN */}
        <div className={styles.logoSection}>
          <Image
            src="/logopravice.png"
            alt="Pravice Abogados – Abogados especialistas en Colombia"
            className={styles.logo}
            width={110}
            height={85}
            priority
          />
          <p className={styles.subtitle}>
            Abogados especializados en asesoría y representación legal en
            Colombia
          </p>
        </div>

        {/* CONTACTO */}
        <address className={styles.contactSection}>
          <h3 className={styles.title}>Contacto legal</h3>

          <ul className={styles.contactList}>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Calle 98 # 22-64 Oficina 716, Bogotá – Colombia</span>
            </li>

            <li>
              <FontAwesomeIcon icon={faMailForward} />
              <a
                href="mailto:info.pravice@abogadosespecialistas.com.co"
                className={styles.link}
              >
                info.pravice@abogadosespecialistas.com.co
              </a>
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+573114659315" className={styles.link}>
                +57 311 465 9315
              </a>
            </li>
          </ul>
        </address>

        {/* REDES SOCIALES */}
        <div className={styles.followSection}>
          <h3 className={styles.title}>Síguenos</h3>
          <p className={styles.subtitleSmall}>
            Contenido legal, noticias y asesoría jurídica
          </p>

          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/praviceabogadosespecializados"
              aria-label="Facebook Pravice Abogados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
              aria-label="LinkedIn Pravice Abogados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              href="https://www.instagram.com/pravice_abogados/"
              aria-label="Instagram Pravice Abogados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.tiktok.com/@pravice_abogados"
              aria-label="TikTok Pravice Abogados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div className={styles.instagramFeed}>
          <h3 className={styles.title}>Instagram</h3>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/pravice_abogados/"
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              margin: "0 auto",
              padding: 0,
              maxWidth: "350px",
              width: "100%",
            }}
          />
        </div>
      </div>

      <hr className={styles.divider} />

      {/* COPYRIGHT */}
      <div className={styles.bottomSection}>
        © {new Date().getFullYear()} Pravice Abogados · Todos los derechos
        reservados
      </div>

      {/* WHATSAPP FLOAT */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.phoneBtn}
          aria-label="Consulta legal por WhatsApp"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
