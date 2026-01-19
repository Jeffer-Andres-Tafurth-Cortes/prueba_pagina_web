"use client";

import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import AboutUs from "@/components/Home/AboutUs";
import Portfolio from "@/components/PortfolioComponents/Portfolio";
import ExperienceSection from "@/components/Home/ExperienceSection";
import DifferentSection from "@/components/Home/DifferentSection";
import AboutPraviceSection from "@/components/Home/AboutPraviceSection";

import styles from "./page.module.css";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: "1",
    name: "Mariana Gómez",
    title: "Directora de Recursos Humanos",
    photo: "/resenas/mariana.jpg",
    message:
      "Contar con Pravice Abogados ha sido clave para manejar nuestros contratos laborales y prevenir riesgos legales. Su equipo siempre está disponible para resolver dudas y ofrecer soluciones prácticas. ¡Un excelente aliado!",
  },
  {
    id: "2",
    name: "Carlos López",
    title: "Gerente Financiero",
    photo: "/resenas/carlos.jpg",
    message:
      "Nos brindaron una asesoría excepcional con resultados claros y efectivos. Su compromiso es incomparable.",
  },
  {
    id: "3",
    name: "Sandra Pérez",
    title: "Empresaria",
    photo: "/resenas/sandra.jpg",
    message:
      "Siempre nos sentimos respaldados en cada proceso legal con Pravice. Su equipo es profesional y comprometido.",
  },
  {
    id: "4",
    name: "Luis Martínez",
    title: "Abogado Externo",
    photo: "/resenas/luis.jpg",
    message:
      "Recomiendo ampliamente su trabajo y asesoría estratégica en temas complejos.",
  },
];

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

      <section id="experiencesection">
        <ExperienceSection />
      </section>

      <section id="portafolio">
        <Portfolio />
      </section>

      <section id="differentsection">
        <DifferentSection />
      </section>

      <section id="aboutpravicesection">
        <AboutPraviceSection />
      </section>

      <section id="resenas">
        <Testimonials reviews={reviewsData} maxSlides={3} />
      </section>

      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={styles.mapTitle}>Nuestra oficina</h3>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </>
  );
}
