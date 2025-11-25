import styles from "./styles/DescriptionSection.module.css";

export default function DescriptionSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        ABOGADOS CON LOS
        <br /> MEJORES RESULTADOS
      </h2>

      <p className={styles.text}>
        En <strong>Pravice Abogados</strong>, defendemos tus derechos con
        <span className={styles.highlight}>
          {" "}
          estrategia, experiencia y compromiso.{" "}
        </span>
        Nuestro equipo analiza cada caso con precisión, construyendo soluciones
        legales sólidas que garanticen resultados reales y confiables.
      </p>

      <p className={styles.textSecondary}>
        Atendemos tus necesidades legales con rigor profesional, atención
        personalizada y un enfoque diseñado para proteger lo que más valoras.
      </p>
    </section>
  );
}
