"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const handleClickApp = () => {
  window.open("https://legalapp.pravice.co/login.php", "_blank");
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      style={{
        position: "fixed",
        top: "40px",
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <nav className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={`${styles.logo} ${styles.dark}`}>
          <Image
            src="/logopravice.png"
            alt="Logo Pravice"
            width={75}
            height={70}
            priority
          />
        </Link>

        {/* MENÚ DESKTOP / MOBILE */}
        <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/areas-juridicas" onClick={() => setMenuOpen(false)}>
              ÁREAS JURIDICAS
            </Link>
          </li>
          <li>
            <Link href="/nuestro-equipo" onClick={() => setMenuOpen(false)}>
              EQUIPO LEGAL
            </Link>
          </li>

          {/** 
           * 
          <li>
            <Link href="/resenas" onClick={() => setMenuOpen(false)}>
              Reseñas
            </Link>
          </li>
          */}

          <li>
            <Link
              href="/preguntas-frecuentes"
              onClick={() => setMenuOpen(false)}
            >
              BLOG
            </Link>
          </li>

          {/**
           * 
          <li>
            <Link href="/contactanos" onClick={() => setMenuOpen(false)}>
              Contáctanos
            </Link>
          </li>
          <li>
            <Link href="/noticias-juridicas" onClick={() => setMenuOpen(false)}>
              Noticias jurídicas
            </Link>
          </li>
          */}
        </ul>

        <button
          className={styles.ctaButton}
          onClick={handleClickApp}
          aria-label="Portal para consultar el estado de mi proceso legal"
        >
          CONSULTAR MI CASO
        </button>

        {/* BOTÓN HAMBURGUESA */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
