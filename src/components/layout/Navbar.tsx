"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    m,
    LazyMotion,
    domAnimation,
    AnimatePresence,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import clsx from "clsx";

/**
 * NAV LINKS
 * SEO-friendly and localized for Sinan MC's brand
 */
type NavLink = { name: string; href: string; isNew?: boolean };

const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio", isNew: true },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

/**
 * LUXURY NAVBAR COMPONENT
 * Hydration-safe: all dynamic/animated content is deferred until after mount.
 * Static HTML is identical between server and client.
 */
export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);
    // Scroll Logic: Vanilla JS to prevent React state updates on scroll (INP fix)
    useEffect(() => {
        if (!mounted) return;
        let lastScrollY = window.scrollY;
        const header = document.getElementById("main-header");

        const handleScroll = () => {
            if (isOpen) return;
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                header?.classList.add("-translate-y-full");
            } else {
                header?.classList.remove("-translate-y-full");
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted, isOpen]);

    // Body Lock for Mobile Menu
    useEffect(() => {
        if (!mounted) return;
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.getElementById("main-header")?.classList.remove("-translate-y-full");
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen, mounted]);

    // Close menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    return (
        <LazyMotion features={domAnimation}>
            <header
                id="main-header"
                className={clsx(
                    "fixed left-0 right-0 top-0 flex justify-center pt-4 px-4 pointer-events-none transition-transform duration-500",
                    isOpen ? "z-[100] translate-y-0" : "z-50 translate-y-0"
                )}
            >
                <nav
                    aria-label="Main Navigation"
                    className="pointer-events-auto w-full max-w-5xl flex items-center justify-between px-4 py-3 sm:px-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300"
                >
                    {/* LOGO: SINAN MC */}
                    <Link
                        href="/"
                        className="group flex items-baseline gap-0.5 select-none"
                    >
                        <span className="text-xl font-black tracking-tight uppercase text-white transition-colors duration-300">
                            SINAN
                        </span>
                        <span className="text-2xl font-black italic text-primary leading-none transition-all duration-300">
                            MC
                        </span>
                        <span className="absolute -bottom-0.5 left-0 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-primary to-yellow-200 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <ul role="menubar" className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            // Only compute active state after mount to match server render
                            const isActive =
                                mounted &&
                                (pathname === link.href ||
                                    (link.href !== "/" &&
                                        pathname.startsWith(link.href)));

                            return (
                                <li key={link.href} role="none" className="relative">
                                    <Link
                                        href={link.href}
                                        role="menuitem"
                                        itemProp="url"
                                        aria-current={isActive ? "page" : undefined}
                                        className={clsx(
                                            "relative z-10 px-4 py-2 text-sm font-medium duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] flex items-center group",
                                            isActive
                                                ? "text-black"
                                                : "text-white/70 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {isActive && mounted && (
                                            <m.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FFD700] to-[#FDB931] rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.2,
                                                    duration: 0.6,
                                                }}
                                            />
                                        )}
                                        <span
                                            className="relative z-10 flex items-center gap-1.5"
                                            itemProp="name"
                                        >
                                            {link.name}
                                            {link.isNew && (
                                                <span className="px-1.5 py-0.5 text-[9px] font-extrabold tracking-wider bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black rounded-full shadow-[0_0_10px_rgba(255,215,0,0.4)]">
                                                    NEW
                                                </span>
                                            )}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CALL TO ACTION */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Link
                            href="/contact"
                            className={clsx(
                                "group hidden sm:flex items-center gap-2 px-6 py-2.5",
                                "bg-gradient-to-tr from-[#FFD700] via-[#FDB931] to-[#FFD700] text-[#0a0a0a] text-sm font-bold rounded-xl",
                                "shadow-[0_0_20px_rgba(255,215,0,0.3)]",
                                "hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
                                "hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 ease-out overflow-hidden relative"
                            )}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                            <span className="relative z-10">Hire Me</span>
                            <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {/* MOBILE HAMBURGER — static aria-label to prevent hydration mismatch */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] transition-all"
                        >
                            {/* Show icon only after mount to prevent server/client mismatch */}
                            {mounted ? (
                                isOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* MOBILE FULLSCREEN MENU — only rendered client-side after mount */}
            {mounted && (
                <AnimatePresence>
                    {isOpen && (
                        <m.div
                            key="mobile-menu"
                            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-[90] pointer-events-auto bg-gradient-to-b from-black/95 to-[#0a0a0a]/98 md:hidden overflow-hidden"
                        >
                            {/* Animated Background Orb */}
                            <m.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.3 }}
                                transition={{ duration: 1 }}
                                className="absolute top-20 right-10 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-screen filter blur-[100px]"
                            />

                            <div className="relative z-10 flex flex-col h-full mt-32 px-8">
                                <nav
                                    className="flex flex-col gap-6"
                                    aria-label="Mobile navigation"
                                >
                                    {navLinks.map((link, idx) => {
                                        const isActive =
                                            pathname === link.href ||
                                            (link.href !== "/" &&
                                                pathname.startsWith(link.href));

                                        return (
                                            <m.div
                                                key={link.href}
                                                initial={{ x: -40, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    delay: 0.15 + idx * 0.1,
                                                    type: "spring",
                                                    stiffness: 100,
                                                }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    itemProp="url"
                                                    className={clsx(
                                                        "text-4xl font-bold tracking-tight transition-all flex items-center w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-xl px-4 py-2 -ml-4",
                                                        isActive
                                                            ? "text-[#FFD700]"
                                                            : "text-white/60 hover:text-white"
                                                    )}
                                                >
                                                    <span
                                                        itemProp="name"
                                                        className="flex items-center gap-3"
                                                    >
                                                        {link.name}
                                                        {link.isNew && (
                                                            <span className="px-2 py-0.5 text-[10px] font-extrabold tracking-wider bg-gradient-to-r from-[#FFD700] to-[#FDB931] text-black rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                                                                NEW
                                                            </span>
                                                        )}
                                                    </span>
                                                    {isActive && (
                                                        <m.span
                                                            layoutId="mobile-dot"
                                                            className="inline-block ml-4 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                                                        />
                                                    )}
                                                </Link>
                                            </m.div>
                                        );
                                    })}
                                </nav>

                                <m.div
                                    className="mt-12 mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.2 + navLinks.length * 0.1 + 0.1,
                                    }}
                                >
                                    <hr className="border-white/10 mb-8 w-1/3" />
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-2xl font-bold text-[#FFD700] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-xl px-4 py-2 -ml-4"
                                        aria-label="Start a project with Sinan MC"
                                    >
                                        Start a Project
                                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                    <p className="mt-2 ml-4 text-white/40 text-lg">
                                        Let&apos;s build something extraordinary together.
                                    </p>
                                </m.div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            )}
        </LazyMotion>
    );
}
