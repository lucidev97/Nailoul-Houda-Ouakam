import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export const Citation = () => {
  const citation_soufi = [
    {
      id: 1,
      text: "La quête du savoir est une obligation pour chaque musulman et musulmane.",
      provenance: "Prophète Muhammad (paix et bénédictions sur lui)",
      image: "nho/CSK.jpg",
    },
    {
      id: 2,
      text: "Le savoir est une lumière qui guide le croyant dans l'obscurité.",
      provenance: "Imam Al-Ghazali",
      image: "nho/IMG_0995.JPG",
    },
    {
      id: 3,
      text: "Cherchez le savoir du berceau à la tombe.",
      provenance: "Prophète Muhammad (paix et bénédictions sur lui)",
      image: "nho/IMG_0243.JPG",
    },
    {
      id: 4,
      text: "Le savoir est la clé de la sagesse et de la compréhension.",
      provenance: "Ibn Sina (Avicenne)",
      image: "nho/KABIR.JPG",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {citation_soufi.map((citation) => (
          <SwiperSlide key={citation.id}>
            <motion.div
              className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl italic mb-4">"{citation.text}"</p>
              <p className="text-lg font-semibold">- {citation.provenance}</p>
              <div className="flex justify-center mt-4">
                <img
                  src={citation.image}
                  alt={citation.provenance}
                  className="w-32 h-32 object-cover rounded-full border-4 border-nailoul_vert"
                />
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
