import React from 'react';
import { motion } from "framer-motion";
import SpotlightCard from '../SpotlightCard';

const Info = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row w-full justify-center items-center text-black px-8 md:px-20 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full flex flex-wrap justify-center items-start gap-6 mt-20 relative">
        
        {/* Our Mission */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="cyan"
        >
          <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
          <p className="text-sm">
            To nurture and sustain academic excellence by imparting quality education 
            to develop a community of intellectuals with professional skills and ethical values.
          </p>
        </SpotlightCard>

        {/* Our Vision */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="green"
        >
          <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
          <p className="text-sm">
            To be a leading institution of higher education contributing to societal development 
            through holistic approach towards learning.
          </p>
        </SpotlightCard>

        {/* Educational Organizational Policy */}
        <SpotlightCard
          className="card-spotlight shadow-lg rounded-xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 w-[380px] h-[200px]"
          spotlightColor="rgba(40, 234, 255, 0.4)"
          data-color="blue"
        >
          <h4 className="text-lg font-semibold mb-2">Educational Organizational Policy</h4>
          <p className="text-sm">
            We are committed to fostering academic excellence, integrity, inclusivity, and 
            innovation in higher education through structured organizational practices.
          </p>
        </SpotlightCard>

      </div>
    </motion.div>
  );
};

export default Info;
