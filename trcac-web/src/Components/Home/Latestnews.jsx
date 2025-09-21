'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const newsCards = [
  {
    title: "Driving Innovation: $100M Investment Initiative",
    desc: "A major campaign has been launched to propel innovation and growth across multiple sectors, backed by a $100 million investment.",
    img: "https://www.trcac.org.in/images/seminar1.jpg",
  },
  {
    title: "Welcoming the Next Generation of Leaders",
    desc: "A new group of talented professionals and students from around the world bring fresh ideas, perspectives, and enthusiasm to the community.",
    img: "https://www.trcac.org.in/images/lib1.JPG",
  },
  {
    title: "Top Rankings Achieved in Industry Reports",
    desc: "The organization proudly maintains top accolades in the latest industry rankings, demonstrating excellence and commitment to quality.",
    img: "https://www.trcac.org.in/images/ict1.JPG",
  },
  {
    title: "Expert Insights from Industry Leaders",
    desc: "A prominent executive shared valuable advice on professional growth, innovation strategies, and navigating career opportunities in today's market.",
    img: "https://www.trcac.org.in/images/confre1.jpg",
  },
];

const Latestnews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <motion.section
      ref={ref}
      className="w-full px-6 md:px-20 py-12 mt-10 mb-10"
      initial={{ backgroundColor: "#c2410c" }}
      animate={{ backgroundColor: isInView ? "#0A2540" : "#c2410c" }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center -ml-[37em]"
        initial={{ color: "#1f2937" }} // gray-900
        animate={{ color: isInView ? "white" : "#1f2937" }}
        transition={{ duration: 1 }}
      >
        TRCAC News Room
      </motion.h2>

      <motion.p
        className="-mt-6 mb-8 text-xl"
        initial={{ color: "#000000" }}
        animate={{ color: isInView ? "white" : "#000000" }}
        transition={{ duration: 1 }}
      >
        Explore TRCAC College's latest achievements, from innovative research to student excellence and community partnerships.
        <br />
        Stay informed about our dynamic and thriving institution.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[35em]">
        {newsCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all hover:scale-105"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-orange-700 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 flex-1">{card.desc}</p>
              <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Latestnews;
