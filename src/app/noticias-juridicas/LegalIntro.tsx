import styles from "./styles/LegalIntro.module.css";

export default function LegalIntro() {
  return (
    <section className={styles.container}>
      <p className={styles.description}>
        En <strong>Pravice Abogados</strong> te mantenemos informado sobre los
        temas jurídicos más relevantes del momento. Aquí encontrarás análisis,
        novedades legales, reformas, fallos judiciales y más contenido de valor
        para empresas y ciudadanos.
      </p>
      <p className={styles.description}>
        Porque entender el entorno legal es el primer paso para tomar decisiones
        estratégicas.
      </p>

      <p className={styles.subheading}>Mantente al día en el</p>
      <h1 className={styles.mainTitle}>MUNDO JURÍDICO</h1>
    </section>
  );
}
