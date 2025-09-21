import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";

const Overview = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fafc] via-white to-gray-50 text-gray-800 font-sans relative">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
        >
          Placement And Higher Education Cell
        </motion.h2>



        <div className="space-y-7 text-gray-700 text-lg leading-relaxed">
          <p>
            The Thakur Ramnarayan College of Arts and Commerce (TRCAC) Placement and Higher Education Committee was started in the Academic Year 2017-18. The TRCAC Placement and Higher Education Committee is one of the most important committees of TRCAC, believing in providing promising career opportunities to young students graduating from TRCAC. The TRCAC Placement and Higher Education Cell acts as a strong link and facilitator between potential recruiters, corporate houses, non-governmental organisations, and students in order to ensure that our students get placements on campus.
          </p>
          <p>
            The members of the TRCAC Placement and Higher Education Committee, have since its inception, played an important role in providing diverse opportunities to our students to explore and participate in the practical aspects of the theoretical concepts studied during their graduation through internships as well as research assignments. In the past, diverse entities have collaborated with the TRCAC Placement and Higher Education Committee in providing opportunities to our students.
          </p>
          <p>
            At TRCAC, the Placement and Higher Education Committee is committed to empower students with pre- placement skills that ensure best placements. We offer internships to all our students, across all our programmes, that enhances their awareness of the world of work, accelerates personal maturity, self- awareness and ability to articulate skills and achievements thereby creating competitive people.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
          >
            Interships
          </motion.h2>

          <p>
            TRCAC takes pride in stating that its students are offered internship opportunities with renowned corporate houses that have assisted the students in identifying and achieving their own personal potential. Internships are a crucial bridge between academia and the professional world, offering students the chance to apply theoretical knowledge in real-world settings. These short-term, hands-on experiences are designed to provide a preview of the professional landscape, equipping students with practical skills, industry insights, and a competitive edge as they transition from college to career.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
          >
            Placements
          </motion.h2>

          <p>
            TRCAC takes pride in declaring that its students have been placed with renowned corporate houses. At TRCAC, we are committed to shaping not only strong academic minds but also successful careers. Our robust placement training programs connect students with real-world opportunities, facilitating a seamless transition from education to employment. We pride ourselves on our strong industry ties, ensuring a diverse range of placement opportunities for our students. Our dedicated Placement and Higher Education Committee provides personalized support, offering guidance on resume building, interview preparation, and continuous professional development. Alumni success stories stand as a testament to the effectiveness of our placement initiatives, with graduates consistently securing positions in reputable companies. At TRCAC, we believe that placements are not just about securing a job; they are about launching a fulfilling and prosperous career.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
          >
            Tarining and Development
          </motion.h2>

          <p>
            1. An important component of the TRCAC Placement and Higher Education Cell is its heavy emphasis upon providing professional and soft-skills training and development of our students.
            <br />
            2. Apart from academic importance, TRCAC believes in the need to provide training to its students to be able to efficiently and effectively undertake the work assignments that are part of their internships and placements.
            <br />
            3. Over the years, the TRCAC Placement and Higher Education Cell has collaborated with different professionals and trainers to engage with our students and equip them with suitable, required professional skills.
            <br />
            4. TRCAC Placement and Higher Education Committee arranged for student skills development seminars like resume building, interview etiquettes and grooming sessions for students across all programmes.

            5. Aptitude development and technical training was conducted for the students of TRCAC.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-3xl font-extrabold text-[#0A2540] mb-6 tracking-tight"
          >
            MOU’s
          </motion.h2>

          <p>
            At TRCAC, we try to meet with our students’ requirements of learning through practical experiences. To meet with the same, we have associated with the following organizations.
            <br />
            1. M/s Knowledge Solutions India A Microsoft AEP : M/s Knowledge Solutions India is a Microsoft Authorized Education Partner offering International certifications to interested students along with proper technical training in various courses.
            <br />
            2. Monster.Com : Monster.com is a leading online employment solution platform that offers paid internships and job opportunities to students in order to help them kickstart their careers.
            <br />
            3. Harjai Computers Pvt. Ltd. - Harjai Computers is enforced by a comprehensive Quality Management System, to provide a platform for young mind to start the professional journey called as CAREER.
          </p>




        </div>
      </section>


      <div className="ml-[8em]">
        <Enquiry />

      </div>
      <Footer />
    </div>
  );
};

export default Overview