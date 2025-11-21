"use client";

import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import NoticiasLista from "@/components/Home/NoticiasLista";
import AboutUs from "@/components/Home/AboutUs";
import Portfolio from "@/components/PortfolioComponents/Portfolio";
import ExperienceSection from "@/components/Home/ExperienceSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

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

      <section id="portafolio">
        <Portfolio />
      </section>

      <section id="experiencesection">
        <ExperienceSection />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="equipo">
        <Team />
      </section>

      <section id="resenas">
        <Testimonials reviews={reviewsData} maxSlides={3} />
      </section>

      <section id="noticias">
        <NoticiasLista />
      </section>
    </>
  );
}
