import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Enquiry from "../Enquiry";
import Footer from "../../Home/Footer";


const rules = [
  "Registration with the Placement and Higher Education Committee is mandatory in order to participate in the placement activities.",
  "All registered students should submit the following within three days of registration: Copy of their latest resume, 2 passport size photographs, Photocopies of relevant testimonials/certificates.",
  "Any change of mail id or mobile number should be immediately intimated as, at times, information may be sent through registered mobile/email.",
  "Students should have consistently good attendance and academic record to avail the services of the Placement and Higher Education Committee.",
  "Students should be regular in attending the events and training sessions organized by the College. Minimum 75% attendance in preparatory sessions is mandatory.",
  "The resume submitted by applicants should strictly adhere to the prescribed format. Otherwise, the application will be rejected.",
  "Deadlines will not be extended under any circumstances.",
  "All communications with the organization will be through the Placement and Higher Education Committee only. If contacted directly, students must inform the committee immediately.",
  "If shortlisted for an interview, it is mandatory for the student to appear for the same.",
  "A student can participate in multiple placements until securing a job offer. Company/university-specific criteria will be binding on students.",
  "If a student misses 2 drives in their area of interest, they may be permanently debarred from placements.",
  "Once selected in campus interviews and issued an appointment letter, the student is out of the placement process.",
  "If selected for a job/internship, the offer letter must be mailed to the Placement Cell. Failing this may invite action.",
  "If a student confirms to join any organization, he/she must join on the proposed date. Any change/rejection must be informed to the committee well in advance.",
  "Students should maintain decorum and the institute's image in all interactions with organizations.",
  "If a student wishes to discontinue any job/internship for genuine reasons, they must inform the Placement and Higher Education Committee before the employer.",
  "Violation of rules, indiscipline, or misbehavior will lead to debarment and strict disciplinary action.",
  "The Principal reserves the right to disallow any student from campus interviews on disciplinary grounds.",
  "Relocation decisions rest with the organization. Rejecting offers due to relocation will disqualify the student from further opportunities.",
  "The Placement and Higher Education Committee does not guarantee a job.",
];

const Policies = () => {
    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-[6em]  flex flex-col items-center">

     <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl -ml-[10em] font-extrabold text-[#0A2540] mb-6 tracking-tight"
            >
             Placement Policies
            </motion.h2>

      <ol className="max-w-4xl w-full space-y-6 list-decimal list-inside bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        {rules.map((rule, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {rule}
          </motion.li>
        ))}
      </ol>

      <Enquiry/>
      <Footer/>
    </div>
  );
};


export default Policies