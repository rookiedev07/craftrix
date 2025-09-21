import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, Users, Trophy, Heart, BookOpen, Leaf, GraduationCap, PartyPopper } from 'lucide-react';
import Enquiry from '../Enquiry';
import Footer from '../../Home/Footer';



const content = {
  "Co-curricular": {
    title: "Darbar-2025",
    text: "On September 13, 2025, the Department of B.A. Multimedia and Mass Communication (BAMMC) at Thakur Ramnarayan College of Arts and Commerce (TRCAC) hosted Darbar-2025, a one-day festival. The event celebrated student talent through various competitions, including film-making, photography, and dance, and featured live celebrity performances. Darbar-2025 aimed to inspire creativity, foster healthy competition, and provide a platform for personal growth.",
    image: "https://www.trcac.org.in/uploads/images/ceep/co-curricular/darbar-2025:_a_celebration_of_talent_and_creativity_at_trcac_1847802456-202509180209.jpg",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  "Cultural": {
    title: "Freshers Party Junior’s Gala 2k25",
    text: "Junior's Gala 2k25, a night of glamour and celebration, featured celebrity judges Saachi Tiwari and Chaaya Phanse for the Mr. and Ms. Freshers contest. New students showcased their style and confidence on the ramp, with winners crowned amidst cheers. The event concluded with an electrifying DJ session, providing a grand beginning to the academic year.",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: PartyPopper,
    color: "from-pink-500 to-rose-600",
    stats: { events: "50+", participants: "800+" }
  },
  "Sports": {
    title: "Sports & Fitness",
    text: "Sports at TRCAC are not just about competition; they are about teamwork, discipline, and physical fitness. Our college has state-of-the-art facilities for cricket, football, basketball, and more. We encourage students to participate in inter-college and national-level tournaments, providing them with professional coaching and support to excel in their chosen sport.",
    image: "https://images.pexels.com/photos/159749/basketball-player-dunk-slam-dunk-game-159749.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Trophy,
    color: "from-green-500 to-emerald-600",
    stats: { sports: "15+", tournaments: "30+" }
  },
  "NSS": {
    title: "National Service Scheme (NSS)",
    text: "The NSS unit at TRCAC is committed to community service and social responsibility. Our volunteers regularly organize blood donation camps, cleanliness drives, and awareness campaigns on important social issues. Through these activities, students learn the value of service and contribute positively to society, embodying the NSS motto: 'Not Me But You.'",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    stats: { volunteers: "200+", campaigns: "40+" }
  },
  "Convocation": {
    title: "Convocation Ceremony",
    text: "The convocation ceremony is a momentous occasion, marking the culmination of years of hard work and dedication. It is a time to celebrate the achievements of our graduating students and to recognize their success. The event brings together faculty, students, and their families in a formal setting, serving as a proud farewell and a new beginning for our alumni.",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-600",
    stats: { graduates: "1000+", ceremonies: "25+" }
  },
  "Socials": {
    title: "TRCAC Socials",
    text: "TRCAC Socials are a great way for students to relax, socialize, and build lasting friendships. We host a variety of social events throughout the year, including freshers' parties, farewells, and themed get-togethers. These events are organized by the students themselves, ensuring they are fun and memorable.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Users,
    color: "from-yellow-500 to-orange-600",
    stats: { events: "20+", attendees: "600+" }
  },
  "Green Initiatives": {
    title: "Green & Sustainability",
    text: "We are committed to creating a sustainable and eco-friendly campus. Our 'Green Initiatives' program includes tree-planting drives, waste management projects, and energy conservation campaigns. We aim to instill environmental consciousness in our students, encouraging them to be responsible citizens and stewards of the planet.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Leaf,
    color: "from-green-600 to-teal-600",
    stats: { trees: "500+", initiatives: "15+" }
  }
};

const Tab = ({ title, active, onClick, icon: Icon, color }) => (
  <button
    onClick={onClick}
    className={`
      group relative py-4 px-6 text-sm font-semibold rounded-xl
      transition-all duration-300 ease-in-out transform
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${active 
        ? `bg-gradient-to-r ${color} text-white shadow-xl scale-105 focus:ring-white` 
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
  color: PropTypes.string.isRequired,
};



const LifeAtTrcac = () => {
  const [activeTab, setActiveTab] = useState("Co-curricular");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentContent = content[activeTab];
  const IconComponent = currentContent.icon;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative min-h-[100vh] pt-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Life at <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">TRCAC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover a world of opportunities, creativity, and growth beyond the classroom. 
              Experience the vibrant campus life that shapes future leaders.
            </p>
            
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white rotate-90" size={32} />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Tab Navigation */}
          <nav className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(content).map((key) => (
                <Tab
                  key={key}
                  title={key}
                  active={activeTab === key}
                  onClick={() => setActiveTab(key)}
                  icon={content[key].icon}
                  color={content[key].color}
                />
              ))}
            </div>
          </nav>

          {/* Content Area */}
          <main className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Image Section */}
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                  <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                    <img
                      src={currentContent.image}
                      alt={currentContent.title}
                      className="w-full h-80 object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-2 bg-gradient-to-t ${currentContent.color} opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                  </div>
                {/* Text Section */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentContent.color} shadow-lg`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      {currentContent.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      {currentContent.text}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className={`
                        px-8 py-4 rounded-xl font-semibold text-white 
                        bg-gradient-to-r ${currentContent.color} 
                        shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                        transition-all duration-300
                      `}>
                        Learn More
                      </button>
                      <button className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-300 hover:shadow-md">
                        View Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Enquiry Section */}
      <div id="enquiry" className="container mx-auto px-6 pt-32">
        <Enquiry />
      </div>

      <Footer />
    </div>
  );
};

export default LifeAtTrcac;
