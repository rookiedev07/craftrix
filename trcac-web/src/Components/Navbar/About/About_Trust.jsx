import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const institutionsLeft = [
  "Thakur Shree DPS College of Engineering & Management 2025 (proposed)",
  "Thakur Shyamnarayan Engineering College 2024",
  "Thakur Specialized Degree College 2023",
  "Thakur Global Business School 2020",
  "Thakur College of Science 2016",
  "Thakur Vidya Mandir Global School 2016",
  "Thakur Shyamnarayan High School (English Medium) 2013",
  "Thakur Shyamnarayan College of Education & Research 2007",
  "Thakur International School 2007",
  "Thakur Public School 2003",
  "Thakur Institute of Career Advancement 2001",
  "Thakur College of Engineering & Technology 2001",
  "Thakur College of Science & Commerce 1992"
];

const institutionsRight = [
  "Thakur Indrasandevi Public School 2025 (proposed ICSE School)",
  "Thakur Bhagwanidevi Musafir Public School 2023",
  "Thakur RamNarayan Public School 2021",
  "Thakur Ramnarayan College of Law 2017",
  "Thakur Ramnarayan College of Arts & Commerce 2016",
  "Thakur School of Architecture and Planning 2014",
  "Thakur School of Global Education 2008",
  "Thakur Institute of Aviation Technology 2006",
  "Thakur Institute of Management Studies & Research 2002",
  "Thakur Institute of Managernent Studies, Career Development & Research 2001",
  "Thakur Polytechnic 1998",
  "Thakur Vidya Mandir High School 1990"
];

const AboutTrust = () => {
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
          About the Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="italic text-xl text-gray-600 mb-12 leading-relaxed border-l-4 border-orange-500 pl-4"
        >
          “A young sapling planted initially has blossomed into a tree spreading
          its branches and stems of education — the example is Thakur
          Educational Trust.”
        </motion.p>

        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            Thakur Educational Trust was formed by the Thakur family as a sense
            of responsibility of repaying the social debt. The trust was
            registered as a Public Trust in the year 1990 with an objective to
            lend a helping hand towards the welfare of society and reform the
            educational system.
          </p>
          <p>
            In the year 1990, the trust took its first step in the field of
            education and now it has become a conglomerate of premiere
            educational Institutions driven by the Thakur family. The Trust is a
            combination of premier educational Institutes, University accredited
            professional courses and autonomous courses. All the Institutions
            under this Trust are ISO certified, which acknowledges the capability
            to deliver and cater to the need of education with professionalism
            worldwide.
          </p>
          <p>
            The Thakur Educational Trust has catered to various needs of society
            including education from KG to PG at all levels irrespective of sex,
            creed and religion.
          </p>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="bg-gradient-to-r from-[#fdfdfd] to-[#f8f9fb] py-20 shadow-inner relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-14 text-center"
          >
            The Educational Institutions under the Trust’s Governance
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <ul className="space-y-5">
              {institutionsLeft.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="text-orange-500 w-6 h-6 mt-1" />
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-5">
              {institutionsRight.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="text-orange-500 w-6 h-6 mt-1" />
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center mt-20">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src="/images/trcac_logo.png" // Replace with official logo
              alt="Thakur Trusts Logo"
              className="w-48 h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>
      <div className="ml-[8em]">
          <Enquiry/>

      </div>
          <Footer/>
    </div>
  );
};

export default AboutTrust;
