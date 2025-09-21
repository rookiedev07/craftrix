import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#0A2540] text-white overflow-hidden -mt-[6em] z-50 fade-top">
      {/* 🔹 Animated Wave at the Top */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // gentle wave motion
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 text-white opacity-30"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,170.7C384,192,480,192,576,165.3C672,139,768,85,864,74.7C960,64,1056,96,1152,133.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </motion.div>

      {/* 🔹 Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* 🔹 Content */}
      <motion.div
        className="flex flex-col md:flex-row min-h-[300px] md:h-[500px] w-full justify-center items-center px-6 md:px-20 gap-6 md:gap-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side - Title */}
        <div className="w-full md:w-1/3 md:ml-10 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">About TRCAC</h3>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 text-sm md:text-base text-center md:text-left leading-relaxed">
          <p>
            Thakur Ramnarayan College of Arts and Commerce is a new gem in the
            necklace of the Thakur group. <br className="hidden md:block" />
            Backed by the visionary spirit of the Thakur group, this College
            brings to Dahisar, world-class <br className="hidden md:block" />
            infrastructure – facilities and amenities for a new generation of
            students.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
