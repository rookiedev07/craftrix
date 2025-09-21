import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const images1 = [
  "https://www.trcac.org.in/images/mel1.jpg",
  "https://www.trcac.org.in/images/mel2.jpg",
];

const images2 = [
  "https://www.trcac.org.in/images/music-studio-1.jpg",
  "https://www.trcac.org.in/images/music-studio-2.jpg",
];

const images3 = [
  "https://www.trcac.org.in/images/art-studio-1.jpg",
  "https://www.trcac.org.in/images/art-studio-2.jpg",
];

const images4 = [
  "https://www.trcac.org.in/images/sr1.jpg",
  "https://www.trcac.org.in/images/sr2.jpg",
];

const images5 = [
  "https://www.trcac.org.in/images/igk2.JPG",
  "https://www.trcac.org.in/images/igk2.JPG",
];

const images6 = [
  "https://www.trcac.org.in/images/dance-studio-1.jpg",
  "https://www.trcac.org.in/images/dance-studio-1.jpg",
];

const Amenities = () => {
  return (
    <div className="space-y-28 pt-8">
      {/* Section 1 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Media Lab
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our Media Lab is a state-of-the-art facility designed for digital content creation, audio-video editing, and multimedia production. Equipped with high-performance systems and advanced software, it provides students with hands-on experience in media and communication technologies.
          </p>
        </motion.div>

        {/* Right Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images1.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Seminar Hall ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images2.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Lab ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Music Studio
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Where sound becomes a symphony. At TRCAC's state of the art recording studio you can put your mind to melody and make your own music.

          </p>
        </motion.div>
      </section>

      {/* section 3 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Art Studio
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A place of peace for your masterpiece. Our colourful art room is the perfect place to let your imagination run wild and create to your heart's extent.

          </p>
        </motion.div>

        {/* Right Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images3.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Seminar Hall ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* section 4 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images4.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Lab ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Sick Room
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Sick Room provides a comfortable space for students to rest and recover, equipped with basic medical facilities for immediate care.
          </p>
        </motion.div>
      </section>

      {/* section 5 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Indoor Gymkhana
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Indoor Gymkhana offers recreational facilities like table tennis and board games, promoting physical activity and relaxation.

          </p>
        </motion.div>

        {/* Right Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images5.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Seminar Hall ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* section 6 */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Slideshow Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="rounded-xl"
          >
            {images6.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Lab ${i + 1}`}
                  className="w-full h-[350px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
            Dance Studio
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Students at TRCAC can take their foot-tapping to the next level at our professionally equipped dance studio where our students have the full freedom to move to their own groove.
          </p>
        </motion.div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
};

export default Amenities;
