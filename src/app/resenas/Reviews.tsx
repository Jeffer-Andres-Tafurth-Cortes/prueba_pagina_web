import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Reviews.module.css";

interface Testimonial {
  title: string;
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    title: "Profesionalismo y compromiso",
    text: "Excelente servicio. Nos asesoraron en un proceso complejo y lograron un resultado favorable. Profesionales y comprometidos.",
    author: "Carlos M.",
  },
  {
    title: "Conocimiento y cercanía",
    text: "El equipo demuestra conocimiento profundo y trato cercano. Nos ayudaron a resolver un problema legal con rapidez y eficacia.",
    author: "Laura G.",
  },
  {
    title: "Claridad en la comunicación",
    text: "Muy recomendados. Explican todo con claridad y se nota la experiencia en cada paso. Sin duda volvería a confiar en ellos.",
    author: "Andrés P.",
  },
  {
    title: "Transparencia y honestidad",
    text: "Lo que más me gustó fue la transparencia y honestidad con la que manejaron mi caso. Siempre me mantuvieron informado.",
    author: "Marcela R.",
  },
  {
    title: "Seriedad y confianza",
    text: "Son abogados serios y comprometidos con sus clientes. Me brindaron tranquilidad en un momento difícil y lograron un excelente resultado.",
    author: "Jorge L.",
  },
  {
    title: "Estrategia y eficacia",
    text: "Gran equipo de profesionales. Su enfoque estratégico marco la diferencia en mi proceso legal. Eficacia y calidad en el servicio.",
    author: "Diana S.",
  },
  {
    title: "Atencion personalizada",
    text: "Desde el primer contacto, sentí confianza. Me guiaron con paciencia y resolvieron todas mis dudas. Totalmente recomendados.",
    author: "Sebastian V.",
  },
  {
    title: "Seguridad y preparación",
    text: "Servicio impecable. No solo resolvieron mi caso, sino que me dieron seguridad en todo momento. Un equipo muy preparado.",
    author: "Natalia F.",
  },
];

export default function Reviews() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Lo que dicen nuestros clientes</h2>
      <div className={styles.underline}></div>

      <div className={styles.grid}>
        {testimonials.map(({ title, text, author }, idx) => (
          <article key={idx} className={styles.card}>
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <p className={styles.author}>{author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
