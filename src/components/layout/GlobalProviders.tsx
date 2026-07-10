"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MouseFollower = dynamic(() => import("@/components/ui/MouseFollower"), {
    ssr: false,
});

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
    ssr: false,
    loading: () => null,
});

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");
    const [loadChatbot, setLoadChatbot] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoadChatbot(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            {/* Navbar/Footer always rendered — Navbar returns null before mount internally */}
            {!isAdminRoute && <Navbar />}
            {!isAdminRoute && <MouseFollower />}
            {children}
            {!isAdminRoute && <Footer />}
            {loadChatbot && !isAdminRoute && <Chatbot />}
        </LazyMotion>
    );
}
