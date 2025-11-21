import styles from "./styles/NewsCard.module.css";

const newsData = [
  {
    id: 1,
    title: "La Cláusula de Retroventa y el tema de la Garantía",
    excerpt:
      "¿Alguna vez has empeñado un artículo y luego lo has recuperado? Tal vez sin saberlo, estuviste frente a una figura jurídica poco comentada, pero muy relevante: la cláusula de retroventa.",
    image: "/noticia1.webp",
  },
  {
    id: 2,
    title:
      "No se puede deshacer un traslado pensional si ya estás pensionado, dice Corte Constitucional",
    excerpt:
      "Sentencia T-157 de 2025 protege la estabilidad del sistema pensional y confirma que los pensionados no pueden volver al régimen anterior.",
    image: "/noticia2.webp",
  },
  {
    id: 3,
    title:
      "No mas cláusulas abusivas: El fallo que le da un portazo a los trucos bancarios",
    excerpt:
      "Un ciudadano demandó a su banco por cláusulas abusivas y ganó, ante esto El Tribunal de Buga, sentenció que las entidades financieras no pueden esconder condiciones ni castigar pagos anticipados. La justicia dijo basta a los abusos bancarios",
    image: "/noticia3.webp",
  },
  {
    id: 4,
    title:
      "Corte suprema reconoce que una persona puede construir patrimonio con su pareja, aunque siga casada con otra",
    excerpt:
      "Corte Suprema de Justicia, emite sentencia que cambia la forma de entender las relaciones patrimoniales cuando una persona vive durante años con una nueva pareja, sin haber disuelto legalmente su matrimonio anterior",
    image: "/noticia4.webp",
  },
  {
    id: 5,
    title:
      "¿Puede exigirse a un abogado que entregue un paz y salvo al finalizar su gestión? Esto respondió la comisión de disciplina judicial",
    excerpt:
      "La Comisión Nacional de Disciplina Judicial fue clara: no existe ninguna norma que obligue a un abogado a emitir un paz y salvo una vez termina su encargo profesional, a menos que se compruebe que lo niega como forma de presionar indebidamente al cliente.",
    image: "/noticia5.webp",
  },
];

export default function NewsCard() {
  return (
    <section className={styles.container}>
      {newsData.map(({ id, title, excerpt, image }) => (
        <article
          key={id}
          className={styles.card}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.excerpt}>{excerpt}</p>
            <button className={styles.button}>Mas info</button>
          </div>
        </article>
      ))}
    </section>
  );
}
