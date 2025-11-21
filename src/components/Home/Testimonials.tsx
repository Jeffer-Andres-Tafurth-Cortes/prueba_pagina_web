"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles/Testimonials.module.css";

interface Review {
  id: string;
  name: string;
  title: string;
  photo: string;
  message: string;
}

interface TestimonialsProps {
  reviews: Review[];
  maxSlides?: number; // cantidad máxima a mostrar
}

const Testimonials: React.FC<TestimonialsProps> = ({ reviews, maxSlides }) => {
  const displayedReviews = maxSlides ? reviews.slice(0, maxSlides) : reviews;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.textContainer}>
        <h2>¿Qué piensan nuestros clientes de nosotros?</h2>
        <p>
          En <b>Pravice Abogados</b>, nuestros clientes destacan nuestra
          asesoría precisa, el acompañamiento estratégico y la seguridad
          jurídica que les brindamos. Nos eligen por nuestro compromiso con la
          solución efectiva de sus problemas legales y por la tranquilidad que
          les ofrecemos en cada proceso.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]} // Agrega los módulos aquí
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 5000ms = 5 segundos
          disableOnInteraction: false, // Sigue autoplay después de interacciones
          pauseOnMouseEnter: true, // Pausa cuando el mouse está encima
        }}
        loop={true} // Para que se reinicie infinito
        className={styles.swiperContainer}
      >
        {displayedReviews.map(({ id, name, title, photo, message }) => (
          <SwiperSlide key={id}>
            <div className={styles.reviewCard}>
              <p className={styles.message}>{message}</p>
              <img src="/profile.jpg" alt={name} className={styles.photo} />
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.title}>{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
