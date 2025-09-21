import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const Trustees_message = () => {
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
          Trustee's Message
        </motion.h2>



        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            “Without continual growth and progress, words such as improvement, achievement and success have no meaning,”
          </p>
          <p>
            Education empowers individual and makes one potential for gainful employment turning them into a responsible citizen. The new college being set up by Thakur Educational Trust is an important step to inculcate value education to students making them responsible citizens in a diverse Global Society.

          </p>

          <p>
            Thakur Educational Group has been playing a pivotal role in the development of education. I am sure that Thakur Ramnarayan College of Arts and Commerce would make a huge diﬀerence to students in their overall holistic development through continual learning process.        </p>
        </div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
}

export default Trustees_message