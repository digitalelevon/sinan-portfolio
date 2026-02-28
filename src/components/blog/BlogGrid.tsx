"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog/data";
import { ArrowRight, Calendar, User } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function BlogGrid() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
            {blogPosts.map((post) => (
                <motion.div
                    key={post.slug}
                    variants={itemVariants}
                    className="group"
                >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                        <div className="bg-dark-100/50 backdrop-blur-sm border border-white/5 group-hover:border-primary/30 rounded-2xl overflow-hidden transition-colors duration-500 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(255,215,0,0.05)]">

                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-dark-100">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.imageAlt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent opacity-60 pointer-events-none" />
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary/70" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-white/20" />
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5 text-primary/70" />
                                        <span>Sinan MC</span>
                                    </div>
                                </div>

                                <h2 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center font-semibold text-primary mt-auto text-sm group-hover:translate-x-1 transition-transform duration-300">
                                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
