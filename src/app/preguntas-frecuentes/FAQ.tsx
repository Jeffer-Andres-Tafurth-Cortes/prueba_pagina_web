"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/FAQ.module.css";
import ThreeBoxes3D from "./ThreeBoxes3D";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "¿Qué servicios ofrece Pravice Abogados?",
    answer:
      "Pravice Abogados ofrece asesoría y representación legal en derecho laboral, derecho penal, derecho de familia, asesoría empresarial, y gestión de cobranzas, entre otros servicios jurídicos especializados.",
  },
  {
    question: "¿Cómo puedo solicitar una consulta legal?",
    answer:
      "Puedes solicitar tu consulta a través de nuestro sitio web, redes sociales o comunicándote directamente por WhatsApp. Nuestro equipo se encargará de agendar la cita según tu disponibilidad.",
  },
  {
    question: "¿Atienden solo empresas o también clientes particulares?",
    answer:
      "Prestamos servicios tanto a empresas como a personas naturales, adaptando nuestra asesoría a las necesidades particulares de cada cliente.",
  },
  {
    question: "¿Qué cobertura geográfica tienen?",
    answer:
      "Brindamos asesoría legal a toda persona que necesite un abogado en Colombia, con posibilidad de realizar consultas virtuales para mayor comodidad de nuestros clientes.",
  },
  {
    question: "¿Cómo funciona el plan de soporte jurídico para empresas?",
    answer:
      "Nuestro plan de soporte jurídico ofrece asesoría continua para empresas, cubriendo consultas legales, redacción de documentos, y acompañamiento en procesos jurídicos, todo por una tarifa mensual fija.",
  },
  {
    question: "¿Qué documentos se necesitan para iniciar un proceso legal?",
    answer:
      "Los documentos varían según el tipo de proceso. En la primera consulta te orientaremos sobre la documentación necesaria para tu caso específico.",
  },
  {
    question: "¿Cuánto tiempo puede tardar un proceso legal?",
    answer:
      "La duración de un proceso legal depende de su complejidad y de la carga judicial. Nuestro compromiso es mantenerte informado sobre cada etapa del proceso.",
  },
  {
    question: "¿Ofrecen planes de pago para sus servicios legales?",
    answer:
      "Sí, ofrecemos opciones de pago flexibles para facilitar el acceso a nuestros servicios, especialmente en procesos de larga duración.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PREGUNTAS FRECUENTES
      </motion.h2>

      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
          >
            <button
              className={styles.accordionButton}
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              {item.question}
              <span className={styles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Contenido animado */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <ThreeBoxes3D />
    </section>
  );
}
