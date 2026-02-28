"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
    ssr: false, // Optional: disables server-side rendering for the chatbot to save initial load time
});

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");
    const [loadChatbot, setLoadChatbot] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoadChatbot(true), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!isAdminRoute && <Navbar />}
            {children}
            {!isAdminRoute && <Footer />}
            {loadChatbot && !isAdminRoute && <Chatbot />}
        </>
    );
}
