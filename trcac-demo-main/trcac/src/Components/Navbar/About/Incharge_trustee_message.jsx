import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const Incharge_trustee_message = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-gray-50 text-gray-800 font-sans relative">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
        >
          Incharge trustee
        </motion.h2>



        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            “Don't limit your challenges, challenge your limits.”
            We at‘ Thakur Ramnarayan College of Arts and Commerce’, aim to discover, enroot and delve into the hidden talents and the magic lying dormant inside all of our students. This will be achieved only when we move forward hand in hand with sincerity, purpose and dedication to achieve heights of glory.</p>
          <p>
            From academics to co- curricular and extra-curricular activities, perseverance and mindfulness are entrenched in the hearts of each student, not only making them academically distinct but brilliant human beings.</p>
          
          <p>
            As the Secretary of the Institution, I am committed to provide unique platform to the students, enabling them to become value based individuals and responsible citizens.         </p>
        </div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
};

export default Incharge_trustee_message