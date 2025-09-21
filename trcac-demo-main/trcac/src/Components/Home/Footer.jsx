'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: isInView ? "#0A2540" : "#ffffff" }}
      transition={{ duration: 1 }}
      className="relative text-gray-100 pt-16 pb-10 px-6 md:px-20 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Thakur Ramnarayan College of Arts & Commerce
        </h2>
        <div className="w-32 h-1 mt-3 bg-gradient-to-r from-[#c2410c] to-pink-500 rounded-full"></div>
        <p className="mt-4 text-lg text-[#c2410c] italic">
          Start your future today with us!
        </p>

        {/* Socials */}
        <div className="flex space-x-5 mt-8">
          <a
            href="https://www.instagram.com/trcacmumbai"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-[#c2410c] hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>

      {/* Links + Contact */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10">
        {/* Column 1 - Important Links */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-orange-500/20 transition">
          <h3 className="text-lg font-semibold text-white mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              "Mumbai University",
              "Director of Higher Education Maharashtra",
              "Maharashtra State Board",
              "UGC",
              "NAAC",
              "RTI",
            ].map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#c2410c] transition-colors"
              >
                → {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 - Contact */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-orange-500/20 transition">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-200">
            <p className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneAlt className="text-[#c2410c]" /> 077100 58545
            </p>
            <p className="flex items-center gap-3 hover:text-white transition">
              <FaEnvelope className="text-[#c2410c]" /> admin@trcac.org.in
            </p>
            <p className="flex items-start gap-3 hover:text-white transition">
              <FaMapMarkerAlt className="text-[#c2410c] mt-1" />
              Thakur Ramnarayan Educational Campus, S.V. Road, Dahisar (East), Mumbai-400068.
            </p>
          </div>
        </div>

        {/* Column 3 - About */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-orange-500/20 transition flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-white mb-4">About TRCAC</h3>
          <p className="text-gray-200 leading-relaxed">
            Empowering students with knowledge and skills for a brighter future. 
            Join our community of learners, leaders, and innovators.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-16 text-center text-sm text-gray-400 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} <span className="text-[#c2410c] font-medium">TRCAC</span>. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
