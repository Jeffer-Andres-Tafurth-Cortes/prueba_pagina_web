import styles from "./styles/NoticiasLista.module.css";

const news = [
  {
    title: "Pravice Abogados: Expertos en Derecho en Bogotá",
    date: "29 mayo, 2024",
    comments: "No Comments",
    excerpt:
      "Historia y Filosofía de Pravice Abogados Pravice Abogados se fundó en el año 2005 por el destacado jurista Dr. Juan Carlos Torres, con la visión de establecer un bufete que ofreciera servicios legales de alta calidad en Bogotá. Desde su creación, el despacho ha mantenido un compromiso incuestionable con la excelencia jurídica, la...",
    link: "#", // en desarrollo, puedes cambiar luego
  },
  {
    title: "Pravice Abogados: Tu Firma de Abogados de Confianza en Bogotá",
    date: "29 mayo, 2024",
    comments: "No Comments",
    excerpt:
      "Historia y Filosofía de Pravice Abogados Pravice Abogados es una firma legal con sede en Bogotá que ha estado ofreciendo servicios de asesoría y representación legal durante más de una década. Fundada con el firme propósito de proporcionar soluciones jurídicas de alta calidad, la firma ha experimentado un crecimiento constante, consolidándose como una...",
    link: "#",
  },
];

export default function LatestNews() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Últimas Noticias</h2>
      <div className={styles.underline}></div>

      <div className={styles.newsGrid}>
        {news.map(({ title, date, comments, excerpt, link }, i) => (
          <article key={i} className={styles.newsCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.meta}>
              {date} / {comments}
            </p>
            <p className={styles.excerpt}>
              {excerpt}{" "}
              <a href={link} className={styles.readMore}>
                Read More
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
