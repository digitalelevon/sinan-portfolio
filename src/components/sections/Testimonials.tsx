"use client";

import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechStart Inc.",
        content:
            "Sinan delivered an exceptional website that exceeded our expectations. The design is modern, and the performance is outstanding.",
        rating: 5,
    },
    {
        name: "Jane Smith",
        role: "Marketing Director, CreativeFlow",
        content:
            "Working with Sinan was a pleasure. He understood our vision perfectly and translated it into a beautiful, functional website.",
        rating: 5,
    },
    {
        name: "Mike Johnson",
        role: "Founder, GreenEarth",
        content:
            "Highly recommended! The attention to detail and commitment to quality are impressive. Our site traffic has increased significantly.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-dark-100/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don&apos;t just take my word for it. Here&apos;s what my clients have to say
                        about their experience working with me.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.12)] transition-all duration-500 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <MessageSquareQuote className="absolute top-8 right-8 text-white/[0.04] group-hover:text-primary/10 transition-colors duration-500 w-12 h-12" />
                            <div className="flex gap-1 mb-4 relative z-10">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-primary fill-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 relative z-10 leading-relaxed font-light">
                                "{testimonial.content}"
                            </p>
                            <div className="relative z-10 pt-4 border-t border-white/[0.08]">
                                <h4 className="font-bold text-white group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
