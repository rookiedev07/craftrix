import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, BookOpen } from "lucide-react";
import SpotlightCard from "../../SpotlightCard";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer"

// ---------- CONTENT ----------
const content = {
  DC: [
    {
      title: "BLP Mini-Marathon 2025!",
      text: "The NSS Unit of Thakur Ramnarayan College proudly celebrates the outstanding success of our committed volunteer, Kumkum Gupta, who secured 2nd place in the BLP Mini-Marathon 2025 – Run for a Leprosy-Free India, held on February 16, 2025, in Kalina, Mumbai. Her remarkable achievement earned her a cash prize of ₹2,500, a certificate, and a medal, reflecting her dedication, perseverance, and exceptional spirit. We commend her for this accomplishment and wish her all the best in her future endeavors!",
      image:
        "https://www.trcac.org.in/uploads/images/awards/student/kumkum_gupta_on_her_impressive_achievement_in_the_blp_mini-marathon_2025!_2024-2025_mskumkum_gupta.jpg",
    },
    {
      title: "Viksit Bharat Young Leaders Dialogue 2025!",
      text: "The NSS Unit of Thakur Ramnarayan College proudly acknowledges the outstanding accomplishment of our dedicated volunteer, Anushka Raut, who participated in the Viksit Bharat Young Leaders Dialogue 2025 and successfully advanced to the PPT Challenge Round at the State Level. Her dedication, leadership, and visionary outlook towards a developed India have earned her this well-deserved recognition. We commend her hard work and wish her continued success in all future endeavors!",
      image:
        "https://www.trcac.org.in/uploads/images/awards/student/anushka_raut_excels_in_viksit_bharat_young_leaders_dialogue_2025!_2024-2025_ms_anushka_raut.jpg",
    },
    {
      title: "1st Place in BLP Mini-Marathon 2025!",
      text: "The NSS Unit of Thakur Ramnarayan College is delighted to announce that our dedicated volunteer, Eram Shaikh, has secured 1st place in the BLP Mini-Marathon 2025 – Run for a Leprosy-Free India, held on 1st February 2025 at Worli, Mumbai. Her incredible achievement earned her a cash prize of ₹4,000 along with a scholarship. This success is a true reflection of her dedication, perseverance, and unwavering spirit of excellence. We commend her exceptional performance and wish her continued success in all her future endeavors!",
      image:
        "https://www.trcac.org.in/uploads/images/awards/student/eram_shaikh_wins_1st_place_in_blp_mini-marathon_2025!_2024-2025_mseram_shaikh.jpg",
    },
    {
      title: "Celebrating Disha Tadhani's Selection for Pre-State Republic Day Parade! ",
      text: "The MY Bharat NSS Unit of Thakur Ramnarayan College takes immense pride in congratulating Ms. Disha Tadhani on her selection for the Pre-State Republic Day Parade.Her unwavering dedication, perseverance, and commitment to national service have earned her this prestigious honor. Wishing her continued success on this remarkable journey!",
      image:
        "https://www.trcac.org.in/uploads/images/awards/student/celebrating_disha_tadhani's_selection_for_pre-state_republic_day_parade!1_2024-2025_msdisha_tadhani.jpg",
    },
    {
      title: "Sudarshan Gupta Shines at 76th Republic Day Parade ",
      text: "The NSS Unit of Thakur Ramnarayan College of Arts & Commerce (TRCAC - B63) is thrilled to celebrate a moment of great honor! Mr. Sudarshan Gupta, a dedicated NSS volunteer from our college, has been selected as a Special Guest for the 76th Republic Day Parade at Kartavya Path, Red Fort, New Delhi. He is among the distinguished 15 MY Bharat NSS Volunteers chosen for the prestigious National Republic Day (NRD) Parade. This incredible accomplishment reflects his dedication and the unwavering commitment of our NSS Unit to national service. Heartfelt congratulations to Sudarshan Gupta on this well-earned recognition!",
      image:
        "https://www.trcac.org.in/uploads/images/awards/student/trcac_nss_volunteer_honored_at_76th_republic_day_parade_2024-2025_mrsudarshan_gupta.jpg",
    },
    {
      title: "Student Achievement in 19th Aavishkar Research Convention 2024",
      text: "Students of Thakur Ramnarayan College of Arts and Commerce, has participated and presented a Research Project at UG Level at 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention (Zonal Round) organized by the University of Mumbai at Bhanumati Kishandas Shroff College of Arts and Maganlal Hargovinddas Shroff College of Commerce, Kandivli, Mumbai on December 13, 2024 for Mumbai III Zone. The said Research Project is selected for 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention (Final Round).",
      image: "https://www.trcac.org.in/uploads/images/awards/student/student_achievement_in_19th_aavishkar_research_convention_2024_2024-2025_team:_from_bcom_(af)_department_1_mr_vasaya_ayan_muneshbhai_2_mr_rao_tribhuvan_bhushan_3_mr_purav_atharva_abhay_4_ms_acharya_nandita_janardhan.jpg"
    },
    {
      title: "Student Achievement in 19th Aavishkar Research Convention 2024",
      text: "Students of Thakur Ramnarayan College of Arts and Commerce, has participated and presented a Research Project at UG Level at 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention (Zonal Round) organized by the University of Mumbai at Bhanumati Kishandas Shroff College of Arts and Maganlal Hargovinddas Shroff College of Commerce, Kandivli, Mumbai on December 13, 2024 for Mumbai III Zone. The said Research Project is selected for 19th Aavishkar: Inter-Collegiate / Institute / Department Research Convention (Final Round).",
      image: "https://www.trcac.org.in/uploads/images/awards/student/student_achievement_in_19th_aavishkar_research_convention_2024_2024-2025_1_mr_sawla_nirrav_dilip_2_mr_prajapati_ankit_dharmendra_3_mr_phadtare_saurabh_pradeep_4_mr_vishwakarma_asmit_bhagwan_5_ms_powar_anaya_vithoba.jpg"
    },
    {
      title: "Tug of War Competition ",
      text: "Tug of war (also known as tug o' war, tug war, rope war, rope pulling, or tugging war) is a sport that pits two teams against each other in a test of strength: teams pull on opposite ends of a rope, with the goal being to bring the rope a certain distance in one direction against the force of the opposing team's pull. Our Trcac Students Participated in the Ashok Championship Which was Organised by NSM Degree College of Commerce,Vile Parle(E),Mumbai-400057.Which was Held on10th December,2024 and 1st Prize in Tug of War Competition,by winning all the matches.",
      image: "https://www.trcac.org.in/uploads/images/awards/student/tug_of_war_competition_2024-2025_trcac_students_ashok_participated_championship_-_1st_prize.jpg"
    },
    {
      title: "Blog Writing Competition by Dept. of Library ",
      text: "First - Parina Dhiren Shah (TYBMS), Second - Rayann Aslam Barudwale (SYBA), Third - Soumya Dharamjit Singh (FYBSc IT)",
      image: "https://www.trcac.org.in/uploads/images/awards/student/blog_writing_competition_by_dept_of_library_2024-2025_blog_writing_competition_by_dept_of_library.jpg"
    },
    {
      title: "जिल्हा युवा महोत्सव मुंबई शहर 2024 - 25 ",
      text: "The District Youth Festival Mumbai City 2024-25 was held on 2nd December 2024. The winners in different categories : Poetry: 1st Prize: Kanak Sharma Science Mela: 1st Prize: Hritik Sharma, Rowen Samuel, Roshan Gupta, Pawan Yadav, Om Panigrah Speech: 2nd Prize: Trisha Shetty, 3rd Prize: Drishti Vaja Story Writing: 1st Prize: Amar Madge Painting: 2nd Prize: Bhoomika Poojari, 3rd Prize: Eram Shaikh Congratulations to all the winners for their exceptional achievements!",
      image: "https://www.trcac.org.in/uploads/images/awards/student/%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE_%E0%A4%AF%E0%A5%81%E0%A4%B5%E0%A4%BE_%E0%A4%AE%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%B5_%E0%A4%AE%E0%A5%81%E0%A4%82%E0%A4%AC%E0%A4%88_%E0%A4%B6%E0%A4%B9%E0%A4%B0_2024_-_25_2024-2025_multiple_winners.jpg"
    },
    {
      title: "Chronicle 2024 - An intercollegiate competition ",
      text: "Ms. Dipika Kumawat, a student of BA History and an NSS Volunteer, has made the college proud by winning 1st Prize in Cosplay, where she brilliantly portrayed the role of Ahilyabai Holkar, and 3rd Prize in the Elocution Competition at Chronicle 2024, an intercollegiate competition organized by Bhavan's College, Andheri. Her outstanding performance in both events highlights her creativity, dedication, and passion for history and public speaking. Congratulations to her on this remarkable accomplishment!",
      image: "https://www.trcac.org.in/uploads/images/awards/student/winner_in_chronicle_2024_-_an_intercollegiate_competition_2024-2025_ms_dipika_kumawat.jpg"
    },
    {
      title: "Zone II Inter Collegiate Volleyball Match ",
      text: "Our Thakur Ramnarayan College of Arts and Commerce, team of Boys won the Volley Ball 1st Match against Sathye college  which was held on 11th October,2024 at Kalina Campus,Santacruz,and entered into 1st Qualifier with a bang. Volleyball,Game played by two teams of six players each,in which an inflated ball is volleyed over a high net.Each team tries to make the ball touch the court within the opposing side's playing areas before it can be returned.A team is allowed to touch the ball three times before returning it. [ Event Date - 11th October 2024 ]",
      image: "https://www.trcac.org.in/uploads/images/awards/student/inter_collegiate_volleyball_match_2024-2025_team_of_boys.jpg"
    },

    // More DC events can be added here
  ],
  JC: [
    {
      title: "Junior Achievers 2025",
      text: "Our Junior College Awards celebrate the young trailblazers who have demonstrated exceptional talent in academics, arts, and sports. These students embody dedication, innovation, and passion at an early stage of their journey.",
      image:
        "https://www.trcac.org.in/uploads/images/ceep/cultural/annual_day_2025_achievers.jpg",
      icon: Users,
    },
    // More JC events can be added here
  ],
};

const Student = () => {
  const [activeTab, setActiveTab] = useState("DC");
  const currentContent = content[activeTab];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden pt-16">
        <SpotlightCard
          className="bg-[#0A2540] p-6 w-full h-full relative"
          spotlightColor="rgba(255, 0, 128, 0.4)"
        >
          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
            <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
              Student Awards
            </h1>
            <h2 className="text-3xl font-bold text-yellow-300 mb-6">at TRCAC</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Celebrating the exceptional achievements, innovations, and
              contributions of our outstanding students across various fields of
              excellence and leadership.
            </p>
          </div>
        </SpotlightCard>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-12xl mx-auto px-6 py-12">
        {/* TABS */}
        <div className="flex justify-center gap-10 mb-12">
          <button
            onClick={() => setActiveTab("DC")}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === "DC"
                ? "bg-orange-500 text-white shadow-xl transform scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 shadow-md"
              }
            `}
          >
            <BookOpen className="h-5 w-5" />
            Degree College Awards
          </button>
          <button
            onClick={() => setActiveTab("JC")}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3
              ${activeTab === "JC"
                ? "bg-orange-500 text-white shadow-xl transform scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 shadow-md"
              }
            `}
          >
            <Users className="h-5 w-5" />
            Junior College Awards
          </button>
        </div>

        {/* TAB CONTENT */}
        {currentContent.map((event, idx) => {
          return (
            <motion.main
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden p-8 md:p-12 mb-12"
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
                      src={event.image}
                      alt={event.title}
                      className="w-full rounded-3xl h-auto max-h-[60vh] object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-105"
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
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      {event.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    {event.text}
                  </p>
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
          );
        })}
      </div>{/* Enquiry & Footer */}
      <div id="enquiry" className="ml-[8em]">
        <Enquiry />
      </div>
      <Footer />
    </div>
  );
};

export default Student;
