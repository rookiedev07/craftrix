'use client';
import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../SpotlightCard";

const Info = () => {
  return (
    <motion.div
      className="w-full md:w-2/3 flex flex-wrap justify-center text-black text-center items-start gap-6 px-6 md:px-12 ml-[50em] -mt-[25em]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
        <p className="text-sm">
          To nurture and sustain academic excellence by imparting quality education.
        </p>
      </SpotlightCard>

      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
        <p className="text-sm">
          To be a leading institution of higher education contributing to societal development.
        </p>
      </SpotlightCard>

      <SpotlightCard
        className="shadow-lg rounded-xl p-6 w-[300px] h-[200px] hover:scale-105 transition"
        spotlightColor="rgba(40, 234, 255, 0.4)"
      >
        <h4 className="text-lg font-semibold mb-2">Educational Policy</h4>
        <p className="text-sm">
          We are committed to fostering academic excellence, integrity and inclusivity.
        </p>
      </SpotlightCard>
    </motion.div>
  );
};

export default Info;
