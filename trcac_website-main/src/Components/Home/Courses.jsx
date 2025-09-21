import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const courses = [
  { 
    name: "B.A", 
    desc: "The Bachelor of Arts degree \n at TRCAC provides a student \n with three subjects of Humanities - Psychology, \n Economics and History, engaging the \n learner not only in theoretical \n knowledge but also hands-on experience with \n various class activities and field trips." 
  },
  { name: "B.A.M.M.C", desc: "Bachelor of Multimedia and Mass \n Communication is an undergraduate \n media-oriented course concerned \n with the communication \n and entertainment mediums used \n by the masses." },
  { name: "B.Com", desc: ".The Bachelor of Commerce degree \n is a 3-year Undergraduate program \n affiliated to the University of Mumbai." },
  { name: "B.A.F", desc: ".The Department of Accounting & Finance \n (B.A.F.) program is a 3-year \n Undergraduate Accounting & \n Finance program affiliated to \n the University of Mumbai." },
  { name: "B.M.S", desc: "The Department of Management Studies \n (B.M.S.) program is a 3-year \n Undergraduate Management program \n affiliated to the University of Mumbai. \n This program aims to provide \n comprehensive management training \n and exposure to the students by \n way of an innovative practical approach \n teaching-learning methodology. " },
  { name: "B.Sc(I.T.)", desc: "The B.Sc. in Information Technology \n is a Bachelor’s degree programme \n that combines theoretical knowledge \n with practical experiments \n to prepare you for the world of work." },
  { name: "B.Sc(C.S.)", desc: "The B.Sc. in Computer Science \n is a Bachelor’s degree that \n teaches learners about computer\n programming, development, maintenance \nand more. " },
  { name: "B.A", desc: "The Bachelor of Arts degree at TRCAC\n provides a student with three\n subjects of Humanities - Psychology,\n Economics and History, engaging the \nlearner not only in theoretical\n knowledge but also hands-on experience \nwith various class activities \nand field trips." },
];

const Courses = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollWidth = containerRef.current.scrollWidth;

    const loopScroll = async () => {
      while (true) {
        await controls.start({
          x: -scrollWidth / 2,
          transition: { duration: 20, ease: "linear" },
        });
        await controls.set({ x: 0 });
      }
    };

    loopScroll();
  }, [controls]);

  // Duplicate courses array to create seamless loop
  const duplicatedCourses = [...courses, ...courses];

  return (
    <div className="w-full py-16 px-8 ">
      <h2 className="text-3xl font-bold mb-8 text-black text-center">Our Courses</h2>

      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
        >
          {duplicatedCourses.map((course, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="min-w-[250px] h-[300px] bg-white text-black rounded-2xl shadow-xl flex-shrink-0 p-6 flex flex-col justify-center items-center cursor-pointer text-center relative"
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Course name always visible */}
              <h3 className="text-xl font-bold mb-2">{course.name}</h3>

              {/* Show description only on hover */}
              {hoveredIndex === index && (
                <motion.p
                  className="text-gray-700 whitespace-pre-line text-sm mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {course.desc}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
