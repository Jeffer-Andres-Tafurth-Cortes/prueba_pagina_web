import Link from "next/link";
import styles from "../../styles/Portfolio.module.css";

export default function Portfolio() {
  const items = [
    "DERECHO LABORAL",
    "DERECHO CIVIL",
    "DERECHO COMERCIAL",
    "DERECHO PENAL",
    "DERECHO DE FAMILIA",
  ];

  return (
    <div className={styles.wrapper}>
      {/* Columna Izquierda */}
      <div className={styles.left}>
        <small className={styles.subtitle}>Especialistas</small>

        <h1 className={styles.title}>NUESTRAS ÁREAS DE PRÁCTICA</h1>

        <p className={styles.description}>
          Somos una firma jurídica que ofrece acompañamiento completo en áreas
          clave del derecho, brindando asesoría, representación y estrategias
          legales para resolver conflictos y proteger los intereses de nuestros
          clientes. Atendemos casos en materia laboral, civil, comercial, penal
          y de familia, asegurando soluciones integrales para cada situación.
          <br /> <br />
          Si el área de práctica que busca no aparece en el listado, comuníquese
          con nuestro equipo haciendo clic en el botón a continuación.
        </p>

        <Link href={"/areas-juridicas"}>
          <button className={styles.ctaButton}>AREAS DE PRÁCTICA</button>
        </Link>
      </div>

      {/* Columna Derecha (Línea de Tiempo) */}
      <div className={styles.right}>
        <ul className={styles.timeline}>
          {items.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <span className={styles.number}>{index + 1}</span>
              <p className={styles.itemText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
