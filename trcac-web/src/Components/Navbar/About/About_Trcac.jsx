import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const AboutTrcac = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-gray-50 text-gray-800 font-sans relative">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
        >
         About Thakur Ramnarayan College of Arts and Commerce (TRCAC)
        </motion.h2>

        

        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            The Thakur Ramnarayan College of Arts and Commerce is an intellectual community that nurtures student’s learning, fosters faculty research, and provides service to the larger community. The college is a comprehensive system where individuals are able to interact with their peers in a deep, meaningful way both inside and outside of the classrooms.
          </p>
          <p>
            At TRCAC we shall stress on collaborative learning, individual intellectual development, and respect for diverse points of view, because we believe that these activities enable graduates to be eﬀective in a rapidly changing, world. An undergraduate major in the Arts, Science, Commerce and Self Finance programmes shall develop for each student critical thinking, clarity of expression and breadth of Knowledge that provides them with professional success, and productive participation in society.
          </p>
          <div>
            <img src="" alt="" />
          </div>
          <p>
           Students shall engage with many learning communities while in the TRCAC : when they join with their entering class in courses that shall build their skills and their sense of opportunity; they shall develop close ties through their major or majors: and they shall connect to local and national communities through internships, service learning and community service. Broad curricular choices shall encourage students to explore personal interests, meet diverse groups across campus, or prepare for speciﬁc graduate and professional programs. At TRCAC, activities within and beyond the classroom shall promote the lifelong learning shall surely make our graduates successful in a wide variety of careers.
          </p>
        </div>
      </section>

      
      <div className="ml-[8em]">
          <Enquiry/>

      </div>
          <Footer/>
    </div>
  );
};

export default AboutTrcac;
