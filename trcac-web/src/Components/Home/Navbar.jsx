// Navbar.jsx
'use client';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const navItems = [
  {
    name: "About",
    dropdown: [
      { name: "About Trust", path: "/abouttrust" },
      { name: "About TRCAC", path: "/abouttrcac" },
      { name: "Chairman's Message", path: "/chairmanmessage" },
      { name: "Incharge Trusties Message ", path: "/inchargetrustiesmessage" },
      { name: "Trustee's Message", path: "/trustiesmessage" },
      { name: "Principle's Message", path: "/principlesmessage" },
      { name: "Statutory Committee", path: "/statutory" },
      { name: "Infrastructure", path: "/infrastructure" },
      { name: "Amenities", path: "/amenities" },
      { name: "Feedback and Action Taken report", path: "/feedback" },
      { name: "College code of conduct", path: "https://www.trcac.org.in/assets/home/College%20Code%20of%20Conduct.pdf" },
    ],
  },
  {
    name: "Life @ TRCAC",
    path: "/lifeattrcac"
  },
  {
    name: "Awards",
    dropdown: [
      { name: "Student Awards", path: "/student" },
      { name: "Faculty Awards", path: "/faculty" },
    ],
  },
  {
    name: "Academics",
    dropdown: [
      {
        name: "Junior College",
        path: "/juniorcollege",
        subDropdown: [
          { name: "Science", path: "/juniorcollege/science" },
          { name: "Commerce", path: "/juniorcollege/commerce" },
          { name: "Arts", path: "/juniorcollege/arts" },
        ],
      },
      { name: "Degree College", path: "/degreecollege" },
      { name: "Academic Calendar", path: "/academiccalendar" },
    ],
  },
  {
    name: "Placements",
    dropdown: [
      { name: "Overview of Placement", path: "/overview" },
      { name: "Placement Committee", path: "/committee" },
      { name: "Training and Development", path: "/development" },
      { name: "Placement and Internship", path: "/internship" },
      { name: "Placement Policies", path: "/policies" },
    ],
  },
  {
    name: "Committee",
    dropdown: [
      { name: "RDC", path: "/rdc" },
      { name: "WDC", path: "/wdc" },
      { name: "EDC", path: "/edc" },
      { name: "Training and Placement", path: "/training" },
      { name: "Green Club", path: "/greenclub" },
      { name: "Literary Club", path: "/literary" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",  
  },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // delay close
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 z-50 
                 bg-black/60 backdrop-blur-lg border-b border-white/10 py-[2em]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center pl-8 w-1/2 h-full"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Link to={"/"}>
          <img
            src="/images/trcac_logo.png"
            alt="College Logo"
            className="w-16 h-16 object-contain"
          />
        </Link>
        <span className="ml-4 font-bold text-2xl tracking-wide text-white 
                         bg-clip-text ">
          TRCAC
        </span>
      </motion.div>

      {/* Navigation */}
      <motion.ul className="flex justify-end items-center space-x-12 pr-10 h-full relative">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="relative font-medium text-white cursor-pointer group"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.1,
              ease: "easeOut",
            }}
            onMouseEnter={() => handleMouseEnter(item.dropdown ? item.name : null)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main nav link */}
            <Link
              to={item.path}
              className="block whitespace-nowrap transition-colors group-hover:text-blue-300"
            >
              {item.name}
            </Link>

            {/* Underline */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 
                         bg-gradient-to-r from-blue-400 to-indigo-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* First-level dropdown */}
            {item.dropdown && activeDropdown === item.name && (
              <motion.ul
                onMouseEnter={() => clearTimeout(timeoutRef.current)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 mt-3 w-62 rounded-xl 
                           border border-white/10 bg-black/70 
                           backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                {item.dropdown.map((subItem, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="relative border-b border-white/5 last:border-none group"
                  >
                    <Link
                      to={subItem.path}
                      className="block px-5 py-3 text-sm text-gray-200 
                                 hover:bg-gradient-to-r hover:from-blue-500/30 
                                 hover:to-indigo-500/30 hover:text-white 
                                 transition-colors whitespace-nowrap"
                    >
                      {subItem.name}
                    </Link>

                    {/* Second-level dropdown */}
                    {subItem.subDropdown && (
                      <motion.ul
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-full ml-2 w-48 rounded-xl 
                                   border border-white/10 bg-black/70 
                                   backdrop-blur-xl shadow-2xl opacity-0 
                                   invisible group-hover:visible group-hover:opacity-100"
                      >
                        {subItem.subDropdown.map((nested, j) => (
                          <li
                            key={j}
                            className="border-b border-white/5 last:border-none"
                          >
                            <Link
                              to={nested.path}
                              className="block px-4 py-3 text-sm text-gray-200 
                                         hover:bg-gradient-to-r hover:from-blue-500/30 
                                         hover:to-indigo-500/30 hover:text-white 
                                         transition-colors"
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
