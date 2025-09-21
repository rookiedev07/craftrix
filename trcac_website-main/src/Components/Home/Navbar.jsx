// Navbar.jsx
import { motion } from "framer-motion";

const navItems = ["About", "Academics", "Awards", "Placements", "Committee", "Admissions", "Contact"];

const Navbar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 z-50 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Left half: Logo */}
      <motion.div
        className="flex items-center pl-8 w-1/2 h-full"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/images/trcac_logo.png" alt="College Logo" className="w-20 h-20 object-contain" />
        <span className="ml-4 font-bold text-xl text-white">TRCAC</span>
      </motion.div>

      {/* Right half: Nav items */}
      <motion.ul className="flex justify-end items-center space-x-6 pr-8 h-full">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="text-white font-semibold cursor-pointer relative overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
          >
            <span className="block hover:text-blue-400">{item}</span>
            {/* Optional hover underline effect */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
