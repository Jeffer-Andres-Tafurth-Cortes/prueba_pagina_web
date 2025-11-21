import styles from "../styles/NewsList.module.css";

type NewsItem = {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Reforma al Código Civil aprobada",
    date: "15 Nov 2025",
    summary:
      "El Congreso aprobó una importante reforma que afecta los derechos de propiedad y contratos.",
    imageUrl: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Nuevas regulaciones laborales para 2026",
    date: "10 Nov 2025",
    summary:
      "Se implementan cambios que buscan proteger mejor a los trabajadores en el sector privado.",
  },
  {
    id: 3,
    title: "Jurisprudencia clave sobre derecho de familia",
    date: "5 Nov 2025",
    summary:
      "El Tribunal Supremo emitió un fallo que establece precedentes para casos de custodia compartida.",
    imageUrl: "/images/news3.jpg",
  },
];

export default function NewsList() {
  return (
    <section className={styles.newsSection}>
      <h2 className={styles.heading}>Noticias Jurídicas</h2>
      <div className={styles.grid}>
        {newsData.map(({ id, title, date, summary, imageUrl }) => (
          <article key={id} className={styles.card}>
            {imageUrl && (
              <div className={styles.imageContainer}>
                <img src={imageUrl} alt={title} className={styles.image} />
              </div>
            )}
            <div className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <time className={styles.date} dateTime={date}>
                {date}
              </time>
              <p className={styles.summary}>{summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
