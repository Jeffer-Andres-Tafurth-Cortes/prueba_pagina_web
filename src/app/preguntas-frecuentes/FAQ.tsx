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
    question: "¿Qué servicios legales ofrece Pravice Abogados?",
    answer:
      "Pravice Abogados ofrece asesoría y representación legal especializada en derecho laboral, derecho civil, derecho de familia, asesoría jurídica empresarial y gestión de cobranzas. Nuestro enfoque está orientado a brindar soluciones legales estratégicas y efectivas para personas y empresas en Colombia.",
  },
  {
    question: "¿Cómo puedo agendar una consulta con un abogado?",
    answer:
      "Puedes solicitar una consulta legal contactándonos directamente por WhatsApp, a través de nuestro sitio web o por medio de nuestras redes sociales. Nuestro equipo coordinará la cita según tu disponibilidad, de forma presencial o virtual.",
  },
  {
    question: "¿Atienden personas naturales y empresas?",
    answer:
      "Sí. En Pravice Abogados brindamos asesoría jurídica tanto a personas naturales como a empresas, adaptando cada estrategia legal a las necesidades específicas del cliente y del caso.",
  },
  {
    question: "¿En qué ciudades prestan servicios legales?",
    answer:
      "Atendemos clientes en toda Colombia. Ofrecemos consultas legales presenciales y virtuales, lo que nos permite acompañar a personas y empresas sin importar su ubicación.",
  },
  {
    question: "¿Cómo funciona el soporte jurídico para empresas?",
    answer:
      "Nuestro servicio de soporte jurídico empresarial consiste en un acompañamiento legal continuo que incluye consultas, redacción y revisión de documentos, y asesoría preventiva, todo mediante un plan mensual adaptado a las necesidades de cada empresa.",
  },
  {
    question: "¿Qué documentos se necesitan para iniciar un proceso legal?",
    answer:
      "Los documentos requeridos dependen del tipo de proceso. Durante la primera consulta legal, nuestros abogados te indicarán exactamente qué documentación necesitas para avanzar de forma correcta y segura.",
  },
  {
    question: "¿Cuánto tiempo puede durar un proceso legal?",
    answer:
      "La duración de un proceso legal varía según su complejidad y la autoridad competente. En Pravice Abogados mantenemos a nuestros clientes informados en cada etapa del proceso, garantizando transparencia y acompañamiento constante.",
  },
  {
    question: "¿Ofrecen facilidades de pago para servicios legales?",
    answer:
      "Sí. Contamos con opciones de pago flexibles para facilitar el acceso a nuestros servicios jurídicos, especialmente en procesos legales de mediana y larga duración.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      <motion.h2
        id="faq-title"
        className={styles.heading}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Preguntas frecuentes sobre nuestros servicios legales
      </motion.h2>

      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <motion.article
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            aria-label={`Pregunta frecuente: ${item.question}`}
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
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

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
          </motion.article>
        ))}
      </div>

      <ThreeBoxes3D />
    </section>
  );
}
