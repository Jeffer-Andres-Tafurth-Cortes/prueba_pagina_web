import PortfolioCard from "./PortfolioCard";
import styles from "../../styles/Portfolio.module.css";

export default function Portfolio() {
  return (
    <>
      <div className={styles.header}>
        <small className={styles.subtitle}>Especialistas</small>
        <h1 className={styles.title}>Portafolio de servicios</h1>
        <p className={styles.description}>
          En Pravice <b>Abogados</b>, contamos con un equipo de especialistas en
          diversas áreas del derecho para ofrecerte soluciones efectivas y
          personalizadas.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <PortfolioCard
          number="01"
          title="Registro de Marca"
          frontText="El registro de la marca es el proceso legal que otorga a una persona o empresa el derecho exclusivo sobre un nombre, logo o símbolo que identifica sus productos o servicios."
          backText="El registro de marca protege tu negocio, te da exclusividad y fortalece tu identidad en el mercado. En Pravice Abogados, te asesoramos en todo el proceso para garantizar un registro exitoso."
          buttonText="Comienza ahora"
          link="/RegistroMarca"
        />
        <PortfolioCard
          number="02"
          title="Laboral"
          frontText="El derecho laboral regula las relaciones entre empleadores y trabajaores, garantizando condiciones justas, el cumplimiento de normativas y la proteccion de derechos."
          backText="En Pravice Abogados, brindamos asesoría y representación en temas laborales para empleadores y trabajadores, asegurando el cumplimiento de la ley y la defensa de derechos."
          buttonText="Protege tu empresa"
          link=""
        />
        <PortfolioCard
          number="03"
          title="Insolvencia"
          frontText="La insolvencia en Colombia es un mecanismo legal que permite a personas y empresas en crisis financiera reorganizar sus deudas o liquidar sus activos de manera ordenada. económica."
          backText="En Pravice Abogados te asesoramos en cada etapa del proceso de insolvencia, desde la evaluación de tu situación financiera hasta la negociación con acreedores y la representación legal ante las autoridades competentes."
          buttonText="Declaración"
          link=""
        />
        <PortfolioCard
          number="04"
          title="Derecho laboral"
          frontText="El derecho civil regula las relaciones entre las personas, protegiendo aspectos como contrato, propiedad, herencias y responsabilidad por daños."
          backText="En Pravice te asesoramos en la redacción, revisión y negociación de los contratos, acompañandote en procesos de reclamación por daños, sucesiones o conflictos relacionados con bienes. Nuestro objetivo es proteger tus intereses y ofrecerte soluciones legales claras para cada situaciones."
          buttonText="Haz clic aqui"
          link=""
        />
        <PortfolioCard
          number="05"
          title="Derecho penal"
          frontText="El derecho penal se encarga de prevenir y sancionar conductas que afectan la seguridad y el orden público, como fraudes, hurtos o delitos informáticos. También protege los derechos de quienes enfrentan una acusación."
          backText="Desde Pravice te brindamos acompañamiento legal en todas las etapas el proceso penal, ya sea para defender tus derechos como víctima o para garantizar una defensa estratégica si enfrentas una acusación. Nuestro equipo trabaja para proteger tu integridad y alcanzar la mejor solución posible."
          buttonText="Haz clic aqui"
          link=""
        />
        <PortfolioCard
          number="06"
          title="Derecho comercial"
          frontText="El derecho comercial regula las relaciones entre empresas. contratos de compraventa, creación de sociedades y cumplimiento de normativas empresariales, garantizando la correcta operación de los negocios."
          backText="En Pravice te acompañamos en la creación de tu empresa, redacción de contratos comerciales, resoluciones de conflictos entre socios y cumplimiento legal. Nuestra asesoría te ayuda a tomar decisiones estratégicas para proteger tu negocio y cumplir con la normativa vigente."
          buttonText="Haz clic aqui"
          link=""
        />
      </div>
    </>
  );
}
