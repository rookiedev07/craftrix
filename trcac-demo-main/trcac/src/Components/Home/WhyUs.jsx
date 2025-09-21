import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaLightbulb, FaRocket, FaArrowRight } from "react-icons/fa";
import PixelCard from '../PixelCard';


const reasons = [
    {
        icon: <FaAward size={36} />,
        title: "Quality Education",
        description:
            "We provide world-class infrastructure and highly qualified faculty to ensure top-quality education.",
    },
    {
        icon: <FaUsers size={36} />,
        title: "Community & Culture",
        description:
            "A vibrant student community with cultural and extracurricular activities for holistic growth.",
    },
    {
        icon: <FaLightbulb size={36} />,
        title: "Innovation & Research",
        description:
            "Encouraging creativity, critical thinking, and innovation in every course and project.",
    },
    {
        icon: <FaRocket size={36} />,
        title: "Career Focus",
        description:
            "Strong placement support and industry collaborations to launch successful careers.",
    },
];

const WhyUs = () => {
    return (
        <div className="w-full py-20 px-8 md:px-20  text-black">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <PixelCard variant="blue" className="relative w-full h-full cursor-pointer">
                            {/* Card content positioned absolutely */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                <div className="text-blue-900 mb-4">{reason.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                <p className="text-gray-600">{reason.description}</p>
                            </div>
                        </PixelCard>
                    </motion.div>
                ))}
            </div>


            <div className="h-[200px] w-[70em] flex items-center ml-[100px] mb-20 mt-20 ">
                <p className="font-bold text-3xl ml-[100px]">
                    Are you ready to take the next step <br /> toward your future career?
                </p>

                <button className="font-bold bg-white px-6 py-3 ml-[200px] flex items-center gap-2 rounded-lg shadow-md 
    transform duration-300 transition-all hover:bg-[#0A2540] hover:text-white">
                    Enquire Now
                    <FaArrowRight className=" transition-colors duration-300 group-hover:text-white hover:text-white" />
                </button>

            </div>
        </div>
    );
};

export default WhyUs;
