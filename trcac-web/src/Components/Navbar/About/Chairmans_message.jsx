import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const Chairmans_message = () => {
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
          Chairman's Message
        </motion.h2>



        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            The Thakur Educational Group is a premier group of institutions which has been contributing to social progress by strengthening the teaching learning process through innovative practices and thereby creating brilliant and innovative students who are showing their excellence in all spheres all over the globe. To continue the spirit of innovations and excellence, Thakur Educational Group has taken a step further to educate the western suburbs.          </p>
          <p>
            Our entire team of Thakur Ramnarayan College of Arts and Commerce will provide a Comprehensive collegiate experience that is anchored in the rich traditions of a quality education. We are committed to provide the best possible learning environment to assist the students in discovering their potential to the maximum.          </p>
          <div>
            <img src="" alt="" />
          </div>
          <p>
            I, on behalf of Thakur Educational Trust, assure you that our experienced group will bring about dynamic changes in society by imparting quality entrance oriented education with the best of the infrastructure facilities, caring attention and the right academic ambience, as expected by a caring parent.          </p>
        </div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
}

export default Chairmans_message