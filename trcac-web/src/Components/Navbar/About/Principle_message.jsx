import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const Principle_message = () => {
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
          Principal's Message
        </motion.h2>



        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
           “Education is not just about learning facts, but about developing the wisdom to apply them for a better world.”
          </p>
          <p>
         For the past decade, Thakur Ramnarayan College of Arts and Commerce has scaled several heights in its passion for delivering peerless education and creating a society that is humane, inclusive and sustainable. Our Vision is to reach the pinnacle of excellence as an institution that is bestowed with great academic, and research capabilities. Our team of highly inspired and motivated faculty members and their involvement in academic and research activities, will fuel the institution’s ascent on the trajectory to success. I am confident that our faculty members will be able to quickly respond to the evolving learning landscape and successfully reinvent themselves to the digitized, virtual environment.

          </p>

          <p>
          As educators, it is our moral duty to guide and support the students and help them achieve their academic and personal goals and ensure that the benefits of education reach every student, especially those with different abilities and needs. We believe in equipping our students with the most modern, versatile and relevant skill set that not only help them attain professional success but become responsible, global citizens who will give back to the community.

Our future is full of challenges and we should be prepared to face them with the determination to succeed. With the clear vision and the able leadership of our management, we will surely progress as an Institution that will set a benchmark for other educational institutions in the country. Owing to its agility, TRCAC will become an Institution of choice for students across the world. Let us move towards this ambition positively.      </p>
        </div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
}
export default Principle_message