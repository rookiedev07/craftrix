import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from "../Home/Footer";


const contactInfo = [
    {
        icon: <MapPin className="w-8 h-8 text-indigo-600" />,
        title: "Address",
        text: "Thakur Ramnarayan Educational Campus, S.V. Road, Dahisar (East), Mumbai-400068."
    },
    {
        icon: <Phone className="w-8 h-8 text-indigo-600" />,
        title: "Contact",
        text: "077100 58545"
    },
    {
        icon: <Mail className="w-8 h-8 text-indigo-600" />,
        title: "Email",
        text: "admin@trcac.org.in"
    }
];
const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50  mt-[8em]  ">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-center text-gray-900"
            >
                Get in Touch
            </motion.h1>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 p-20">
                {contactInfo.map((info, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition"
                    >
                        <div className="bg-indigo-100 p-4 rounded-full mb-4">{info.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                        <p className="mt-2 text-gray-600">{info.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* Contact Form + Map */}
            <div className="grid lg:grid-cols-2 gap-12 mt-16 p-20">
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-2xl rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Have Questions? Let’s Talk!
                    </h2>
                    <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Mobile"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                >
                    <iframe
                        title="College Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.746344227276!2d72.85961957590858!3d19.130224752892393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b14c5a2f77d9%3A0x4455c9a6e0d7f3bb!2sThakur%20Ramnarayan%20College%20Of%20Arts%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1694707066677!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        className="h-[500px] w-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </div>
            <div className="mt-[8em]">
            <Footer />
            </div>
        </div>
    );
}

export default Contact