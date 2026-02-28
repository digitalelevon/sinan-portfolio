"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount to handle initial scroll state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header
            suppressHydrationWarning
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
                mounted && scrolled ? "top-4 px-4" : "top-0 px-0"
            )}
        >
            <nav
                suppressHydrationWarning
                aria-label="Main Navigation"
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
                className={cn(
                    "w-full transition-all duration-500 relative flex items-center justify-between",
                    mounted && scrolled
                        ? "max-w-5xl bg-dark/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3 px-6"
                        : "container mx-auto bg-transparent py-6 px-6 lg:px-12"
                )}
            >
                <div className="flex items-center">
                    <Link
                        href="/"
                        aria-label="Sinan MC Home"
                        className="text-2xl font-black tracking-tighter flex items-center gap-1 hover:opacity-80 transition-opacity z-50 relative group"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 uppercase">SINAN</span>
                        <span className="text-primary group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] transition-all duration-300 italic">MC</span>
                    </Link>
                </div>

                {/* Desktop Menu - Floating Pill */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ul className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-inner">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                            return (
                                <li key={link.name} itemProp="name">
                                    <Link
                                        href={link.href}
                                        itemProp="url"
                                        aria-current={isActive ? "page" : undefined}
                                        className="relative px-5 py-2.5 text-sm font-medium transition-colors block rounded-full"
                                    >
                                        <span className={cn(
                                            "relative z-10 transition-colors duration-300",
                                            isActive ? "text-dark font-bold" : "text-white/70 hover:text-white"
                                        )}>
                                            {link.name}
                                        </span>
                                        {isActive && (
                                            <div
                                                className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)] pointer-events-none"
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center z-10">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm transition-all bg-white text-dark hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/80 via-white to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                        <span className="relative flex items-center gap-2">
                            Hire Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors p-2 z-50 relative bg-white/5 border border-white/10 rounded-full backdrop-blur-sm shadow-sm"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={cn(
                    "fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-dark/90 z-40 md:hidden flex flex-col justify-center px-6 pt-20 transition-all duration-400 backdrop-blur-md",
                    isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <ul className={cn(
                    "flex flex-col space-y-3 w-full max-w-sm mx-auto transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "translate-x-0" : "-translate-x-8"
                )}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                        return (
                            <li key={link.name} itemProp="name">
                                <Link
                                    href={link.href}
                                    itemProp="url"
                                    onClick={() => setIsOpen(false)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "flex items-center justify-between py-4 px-6 text-2xl font-bold rounded-2xl transition-all border",
                                        isActive
                                            ? "bg-primary text-dark border-primary shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                            : "text-white/70 hover:bg-white/5 border-white/5 hover:text-white hover:border-white/10"
                                    )}
                                >
                                    {link.name}
                                    {isActive && <ArrowRight className="w-6 h-6" />}
                                </Link>
                            </li>
                        );
                    })}

                    <li className="pt-8">
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex w-full items-center justify-center gap-2 py-4 rounded-2xl bg-white text-dark text-xl font-black shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                        >
                            Hire Me
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
