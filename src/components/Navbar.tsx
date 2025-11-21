"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      style={{
        position: "fixed",
        top: "30px",
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
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/areas-juridicas" onClick={() => setMenuOpen(false)}>
              Areas jurídicas
            </Link>
          </li>
          <li>
            <Link href="/nuestro-equipo" onClick={() => setMenuOpen(false)}>
              Nuestro equipo
            </Link>
          </li>
          <li>
            <Link href="/resenas" onClick={() => setMenuOpen(false)}>
              Reseñas
            </Link>
          </li>
          <li>
            <Link
              href="/preguntas-frecuentes"
              onClick={() => setMenuOpen(false)}
            >
              Preguntas frecuentes
            </Link>
          </li>
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
        </ul>

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
