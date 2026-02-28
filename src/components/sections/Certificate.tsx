"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certificates = [
    {
        icon: <Award className="w-8 h-8 text-yellow-500" />,
        title: "Google UX Design Professional Certificate",
        issuer: "Coursera / Google",
        date: "2023",
    },
    {
        icon: <Award className="w-8 h-8 text-blue-500" />,
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera / Meta",
        date: "2024",
    },
    {
        icon: <Award className="w-8 h-8 text-green-500" />,
        title: "Full Stack Web Development Bootcamp",
        issuer: "Udemy",
        date: "2022",
    },
];

export default function Certificate() {
    return (
        <section className="py-20 bg-dark-100/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Certifications & <span className="text-primary">Achievements</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Validating skills and expertise through industry-recognized certifications.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="group relative flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] cursor-default"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="bg-white/5 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-primary/10">
                                {cert.icon}
                            </div>
                            <div className="flex-1 relative z-10">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{cert.issuer}</p>
                            </div>
                            <div className="text-sm font-bold text-gray-400 bg-white/5 border border-white/10 group-hover:border-primary/30 group-hover:text-primary py-1.5 px-4 rounded-full transition-all duration-300 relative z-10">
                                {cert.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
