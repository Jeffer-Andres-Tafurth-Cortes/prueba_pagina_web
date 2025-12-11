"use client";

import { motion } from "framer-motion";
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
  maxSlides?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({ reviews, maxSlides }) => {
  const displayedReviews = maxSlides ? reviews.slice(0, maxSlides) : reviews;

  return (
    <section className={styles.testimonialsSection}>
      {/* --- TEXT ANIMATION --- */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>¿Qué piensan nuestros clientes de nosotros?</h2>
        <p>
          En <b>Pravice Abogados</b>, nuestros clientes destacan nuestra
          asesoría precisa, el acompañamiento estratégico y la seguridad
          jurídica que les brindamos. Nos eligen por nuestro compromiso con la
          solución efectiva de sus problemas legales y por la tranquilidad que
          les ofrecemos en cada proceso.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className={styles.swiperContainer}
      >
        {displayedReviews.map(({ id, name, title, photo, message }) => (
          <SwiperSlide key={id}>
            {/* --- CARD ANIMATION --- */}
            <motion.div
              className={styles.reviewCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <p className={styles.message}>{message}</p>
              <img src="/profile.jpg" alt={name} className={styles.photo} />
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.title}>{title}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
