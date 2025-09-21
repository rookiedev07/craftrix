import React from "react";
import { motion } from "framer-motion";
import Enquiry from "../Enquiry";
import Footer from "../../Home/footer"

const data = [
  { id: 1, name: "Ms. Komal Jambhale", },
  { id: 2, name: "	Ms. Prajakta Kadam", },
  { id: 3, name: "Mr. Darshan Kantelia", },
  { id: 4, name: "	Dr. Rupali Alone",  },
  { id: 5, name: "	Ms. Sanjana Pandey",  },
  { id: 6, name: "		Ms. Ruhi Main",  },
];

const tdata = [
  {id:1, name:"Ms. Sonali Serigar"},
  {id:2, name:"	Mr. Aman Joshi"},
  {id:3, name:"	Ms. Daksha Choudhary"},
  {id:4, name:"Ms. Sangeeta Yadav"},
  {id:5, name:"Mr. Shivam Pandey"},
]

const Committee = () => {
   return (
    <div className="h-full flex flex-col items-center">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-3xl mt-20 font-extrabold text-[#0A2540] mb-6 text-center"
      >
        Consultant
      </motion.h2>

      <p className="font-bold text-center text-2xl">Ms. Priyanka V. Singh <br /><span className="text-xl">Contact No: 9594026665</span></p>


        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-3xl mt-20 font-extrabold text-[#0A2540] mb-6 text-center"
      >
        Chairperson

      </motion.h2>

      <p className="font-bold text-center text-2xl">Ms. Prachi Singh <br /><span className="text-xl">Email: placement@trcac.org.in</span></p>



      {/* Table */}
      <p className="font-bold text-3xl text-center mt-[2em]">Placement Member</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-3xl mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
      >

        <table className="min-w-full text-left">
          <thead className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold text-lg">Sr.no</th>
              <th className="px-6 py-4 font-semibold text-lg">Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-gray-700">{user.id}</td>
                <td className="px-6 py-4 text-gray-800">{user.name}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-3xl mt-20 font-extrabold text-[#0A2540] mb-6 text-center"
      >
        Training Head

      </motion.h2>

      <p className="font-bold text-center text-2xl">Mr. Sumeet Rathod </p>

      <p className="font-bold text-3xl text-center mt-[2em]">Training Member</p>

       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-3xl mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
      >

        <table className="min-w-full text-left">
          <thead className="bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white">
            <tr>
              <th className="px-6 py-4 font-semibold text-lg">Sr.no</th>
              <th className="px-6 py-4 font-semibold text-lg">Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tdata.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <td className="px-6 py-4 font-medium text-gray-700">{user.id}</td>
                <td className="px-6 py-4 text-gray-800">{user.name}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

        <Enquiry/>
      <Footer/>
      
    </div>
  );
};

export default Committee