import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

// Replace with your actual seminar hall images
const images1 = [
  "https://www.trcac.org.in/images/seminar1.jpg",
  "https://www.trcac.org.in/images/seminar2.jpg",
];

const images2 = [
  "https://www.trcac.org.in/images/lib1.JPG",
  "https://www.trcac.org.in/images/lib2.JPG",
];

const images3 = [
  "https://www.trcac.org.in/images/ict1.JPG",
  "https://www.trcac.org.in/images/ict2.JPG",
];

const images4 = [
  "https://www.trcac.org.in/images/confre1.jpg",
  "https://www.trcac.org.in/images/confre2.jpg",
];

const images5 = [
  "https://www.trcac.org.in/images/phy1.jpg",
  "https://www.trcac.org.in/images/phy2.jpg",
];

const images6 = [
  "https://www.trcac.org.in/images/hsl1.JPG",
  "https://www.trcac.org.in/images/hsl2.JPG",
];

const images7 = [
  "https://www.trcac.org.in/images/npr1.jpg",
  "https://www.trcac.org.in/images/npr2.jpg",
];

const images8 = [
  "https://www.trcac.org.in/images/fullac3.JPG",
  "https://www.trcac.org.in/images/fullac2.JPG",
];

const Infrastructure = () => {
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
            Seminar Hall
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The college provides the students with a fully air-conditioned
            Seminar Hall that has a seating capacity of 150. Situated on the
            first floor of the college building, it is equipped with modern
            audio-visual equipment and is thus an ideal place for conducting
            seminars, workshops, and training programs for students and
            teachers.
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
            LIBRARY 
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           The Library is the soul of any educational institute. Our library is spread over a vast area and contains reference books, encyclopedias, magazines, journals and newspapers. Students can expand their horizons of knowledge by making use of this spacious, quiet and packed power house of knowledge
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
           ICT Enabled Computer lab
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           TRCAC takes pride in its modern and well-equipped computer laboratory. The college has a Microsoft campus agreement for software being used in the laboratory. All laboratories are in LAN with structured cabling as per international norms. All computers are connected to the internet.
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
           Conference Room
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           Our Conference Room is a modern, fully-equipped space designed for meetings, seminars, and presentations. Featuring advanced audio-visual technology and comfortable seating, it offers an ideal environment for academic discussions and professional gatherings.
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
           Psychology Lab 
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           Our Psychology Lab is a fully-equipped space designed for practical training and research in psychology. With advanced tools and resources for conducting experiments and studies, it provides students with hands-on experience in behavioral and cognitive research. The lab supports academic growth and enhances understanding of psychological principles.
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
           Home Science Lab
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
           Our Home Science Lab is a state-of-the-art facility designed to provide hands-on learning experiences in home management, culinary arts, and textile science. Equipped with modern appliances, ergonomic furniture, and spacious workstations, it fosters creativity and practical skill development, allowing students to experiment, innovate, and apply theoretical knowledge in a real-world setting.
          </p>
        </motion.div>
      </section>

      {/* section 7 */}
       <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 tracking-tight uppercase">
          NAAC & P.H.E Room
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our NAAC & P.H.E Room is a dedicated space designed to support institutional quality assurance and foster student growth through the Placement and Higher Education (P.H.E) Cell. This room serves as a hub for meetings, planning sessions, and documentation related to accreditation processes, compliance, and institutional development. It also plays a vital role in facilitating career counseling, placement drives, and higher education guidance.
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
            {images7.map((img, i) => (
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

      {/* section 8 */}
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
            {images8.map((img, i) => (
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
           Fully A/C Classroom
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            TRCAC has well-lit, modern and ergonomically designed classrooms. They are specially designed keeping in mind the needs of students and providing them with the most conducive learning environment. The main aim is to provide students the perfect environment to concentrate, absorb and participate in the teaching-learning process.
          </p>
        </motion.div>
      </section>

<div className="ml-[8em]">
      <Enquiry/>

</div>
      <Footer/>
    </div>
  );
};

export default Infrastructure;
