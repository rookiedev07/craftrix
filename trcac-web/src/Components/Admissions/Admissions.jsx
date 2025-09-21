import { useState } from "react";
import { GraduationCap, BookOpen, Briefcase } from "lucide-react";

const juniorCourses = [
    {
        name: "FYJC Arts",
        desc: "First Year Junior College - Arts stream with Humanities subjects.",
        icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    },
    {
        name: "SYJC Arts",
        desc: "Second Year Junior College - Arts stream continuation.",
        icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    },
    {
        name: "FYJC Commerce",
        desc: "First Year Junior College - Commerce stream with Business & Accounts.",
        icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    },
    {
        name: "SYJC Commerce",
        desc: "Second Year Junior College - Commerce stream continuation.",
        icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    },
];

const degreeCourses = [
    { name: "B.A.", desc: "Bachelor of Arts with multiple subject options.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.A.M.M.C.", desc: "Bachelor of Arts in Multimedia & Mass Communication.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.Com", desc: "Bachelor of Commerce.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.Com (B&F)", desc: "Bachelor of Commerce in Banking & Finance.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.M.S", desc: "Bachelor of Management Studies.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.A.F", desc: "Bachelor of Accounting & Finance.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.Sc (I.T.)", desc: "Bachelor of Science in Information Technology.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
    { name: "B.Sc (C.S.)", desc: "Bachelor of Science in Computer Science.", icon: <GraduationCap className="w-8 h-8 text-orange-500" /> },
];

const Admissions = () => {
    const [activeTab, setActiveTab] = useState("junior");

    const courses = activeTab === "junior" ? juniorCourses : degreeCourses;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 pt-32">
            <h1 className="text-3xl font-bold text-center mb-8">Admissions</h1>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <button
                    className={`px-6 py-2 rounded-l-full font-medium transition-colors ${activeTab === "junior"
                            ? "bg-orange-500 text-white"
                            : "bg-white border border-orange-500 text-orange-500"
                        }`}
                    onClick={() => setActiveTab("junior")}
                >
                    Junior Programmes
                </button>
                <button
                    className={`px-6 py-2 rounded-r-full font-medium transition-colors ${activeTab === "degree"
                            ? "bg-orange-500 text-white"
                            : "bg-white border border-orange-500 text-orange-500"
                        }`}
                    onClick={() => setActiveTab("degree")}
                >
                    Degree Programmes
                </button>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.map((course, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-orange-300 cursor-pointer transition-shadow"
                    >
                        <div className="mb-4 flex items-center justify-center">{course.icon}</div>
                        <h2 className="text-xl font-semibold text-center mb-2">{course.name}</h2>
                        <p className="text-gray-600 text-center text-sm">{course.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admissions;