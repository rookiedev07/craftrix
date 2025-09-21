import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ChevronRight, Users, Trophy, Heart, BookOpen, Leaf, GraduationCap, PartyPopper } from 'lucide-react';
import Enquiry from '../Enquiry';
import Footer from '../../Home/Footer';
import SpotlightCard from "../../SpotlightCard";

const content = {
  "Co-curricular": {
    title: "Darbar-2025",
    text: "On September 13, 2025, the Department of B.A. Multimedia and Mass Communication (BAMMC) at Thakur Ramnarayan College of Arts and Commerce (TRCAC) hosted Darbar-2025, a one-day festival. The event celebrated student talent through various competitions, including film-making, photography, and dance, and featured live celebrity performances. Darbar-2025 aimed to inspire creativity, foster healthy competition, and provide a platform for personal growth.",
    image: "https://www.trcac.org.in/uploads/images/ceep/co-curricular/darbar-2025:_a_celebration_of_talent_and_creativity_at_trcac_1847802456-202509180209.jpg",
    icon: BookOpen,
  },
  "Cultural": {
    title: "Freshers Party Junior’s Gala 2k25",
    text: "Junior's Gala 2k25, a night of glamour and celebration, featured celebrity judges Saachi Tiwari and Chaaya Phanse for the Mr. and Ms. Freshers contest. New students showcased their style and confidence on the ramp, with winners crowned amidst cheers. The event concluded with an electrifying DJ session, providing a grand beginning to the academic year.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: PartyPopper,
    stats: { events: "50+", participants: "800+" }
  },
  "Sports": {
    title: "Sports & Fitness",
    text: "Sports at TRCAC are not just about competition; they are about teamwork, discipline, and physical fitness. Our college has state-of-the-art facilities for cricket, football, basketball, and more. We encourage students to participate in inter-college and national-level tournaments, providing them with professional coaching and support to excel in their chosen sport.",
    image: "https://images.pexels.com/photos/159749/basketball-player-dunk-slam-dunk-game-159749.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Trophy,
    stats: { sports: "15+", tournaments: "30+" }
  },
  "NSS": {
    title: "National Service Scheme (NSS)",
    text: "The NSS unit at TRCAC is committed to community service and social responsibility. Our volunteers regularly organize blood donation camps, cleanliness drives, and awareness campaigns on important social issues. Through these activities, students learn the value of service and contribute positively to society, embodying the NSS motto: 'Not Me But You.'",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Heart,
    stats: { volunteers: "200+", campaigns: "40+" }
  },
  "Convocation": {
    title: "Convocation Ceremony",
    text: "The convocation ceremony is a momentous occasion, marking the culmination of years of hard work and dedication. It is a time to celebrate the achievements of our graduating students and to recognize their success. The event brings together faculty, students, and their families in a formal setting, serving as a proud farewell and a new beginning for our alumni.",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: GraduationCap,
    stats: { graduates: "1000+", ceremonies: "25+" }
  },
  "Socials": {
    title: "TRCAC Socials",
    text: "TRCAC Socials are a great way for students to relax, socialize, and build lasting friendships. We host a variety of social events throughout the year, including freshers' parties, farewells, and themed get-togethers. These events are organized by the students themselves, ensuring they are fun and memorable.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Users,
    stats: { events: "20+", attendees: "600+" }
  },
  "Green Initiatives": {
    title: "Green & Sustainability",
    text: "We are committed to creating a sustainable and eco-friendly campus. Our 'Green Initiatives' program includes tree-planting drives, waste management projects, and energy conservation campaigns. We aim to instill environmental consciousness in our students, encouraging them to be responsible citizens and stewards of the planet.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Leaf,
    stats: { trees: "500+", initiatives: "15+" }
  }
};

const Tab = ({ title, active, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`
      group relative py-4 px-6 text-sm font-semibold rounded-xl
      transition-all duration-300 ease-in-out transform
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${active
        ? `bg-[#0A2540] text-white shadow-xl scale-105 focus:ring-white`
        : 'text-gray-700 bg-white hover:bg-gray-50 hover:shadow-lg hover:scale-105 border border-gray-200 focus:ring-gray-300'
      }
    `}
  >
    <div className="flex items-center gap-2">
      <Icon size={18} className={`${active ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'} transition-colors`} />
      <span>{title}</span>
    </div>
    {active && (
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    )}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const LifeAtTrcac = () => {
  const [activeTab, setActiveTab] = useState("Co-curricular");

  const currentContent = content[activeTab];
  const IconComponent = currentContent.icon;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] pt-16">
        <div className="absolute inset-0"></div>
        <SpotlightCard
          className="bg-[#0A2540] p-6 w-full h-[100vh]"
          spotlightColor="rgba(255, 0, 128, 0.4)"
        >
          <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Life at <span className="bg-gradient-to-r">TRCAC</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Discover a world of opportunities, creativity, and growth beyond the classroom.
              Experience the vibrant campus life that shapes future leaders.
            </motion.p>
          </div>
        </SpotlightCard>
      </section>

      {/* Tabs and Content */}
      <div className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <nav className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(content).map((key) => (
                <Tab
                  key={key}
                  title={key}
                  active={activeTab === key}
                  onClick={() => setActiveTab(key)}
                  icon={content[key].icon}
                />
              ))}
            </div>
          </nav>

          <motion.main
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Image */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full h-80 object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-[#0A2540] shadow-lg">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {currentContent.title}
                  </h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-light">{currentContent.text}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-xl font-semibold text-white bg-[#0A2540] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-300 hover:shadow-md">
                    View Gallery
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>

      {/* Enquiry & Footer */}
      <div id="enquiry" className="ml-[8em]">
        <Enquiry />
      </div>
      <Footer />
    </div>
  );
};

export default LifeAtTrcac;
