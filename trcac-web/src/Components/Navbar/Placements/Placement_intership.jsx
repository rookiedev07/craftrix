import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { year: "2020", students: 120 },
  { year: "2021", students: 180 },
  { year: "2022", students: 240 },
  { year: "2023", students: 300 },
  { year: "2024", students: 350 },
  { year: "2025", students: 420 },
];

const images1 = [
  "https://www.trcac.org.in/images/seminar1.jpg",
  "https://www.trcac.org.in/images/seminar2.jpg",
];

const Placement_intership = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-gray-50 text-gray-800 font-sans relative">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
        >
          Placement Records
        </motion.h2>

        <div className="w-full h-[500px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
            No. of Students vs Years
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A2540" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0.6} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="year" tick={{ fill: "#333", fontWeight: 600 }} />
              <YAxis tick={{ fill: "#333", fontWeight: 600 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "none",
                }}
              />
              <Legend />
              <Bar
                dataKey="students"
                fill="url(#barGradient)"
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>


       <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
        >
          Intership Records
        </motion.h2>

        <div className="w-full h-[500px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-6">
            No. of Students vs Years
          </h2>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0A2540" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0.6} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="year" tick={{ fill: "#333", fontWeight: 600 }} />
              <YAxis tick={{ fill: "#333", fontWeight: 600 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "none",
                }}
              />
              <Legend />
              <Bar
                dataKey="students"
                fill="url(#barGradient)"
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* testumonials */}

       <h2 className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-4 ml-[10em] tracking-tight uppercase">
            Testimonials
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
      <div>
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" w-[30em] h-[30em] ml-[30em] overflow-hidden shadow-lg"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {images1.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`Seminar Hall ${i + 1}`}
                  className="w-full h-[30em] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
};
export default Placement_intership