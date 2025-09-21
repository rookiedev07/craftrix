import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-[300px] md:h-[500px] w-full justify-center items-center text-black px-6 md:px-20 gap-6 md:gap-12"
      initial={{ opacity: 0, y: 50 }}     // start slightly below
      whileInView={{ opacity: 1, y: 0 }}  // fade in and move up
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible, only once
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
  );
};

export default AboutSection;
