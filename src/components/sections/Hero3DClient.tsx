"use client";

// Thin client wrapper — allows dynamic ssr:false to work inside Server Components.
// The actual Hero3D component is heavy (Three.js) and loads lazily client-side.
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero3DClient() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Only load the heavy 3D canvas on Desktop, and delay it slightly
        if (window.innerWidth >= 1024) {
            const timer = setTimeout(() => setShouldLoad(true), 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!shouldLoad) return null;

    return (
        <Suspense fallback={null}>
            <Hero3D />
        </Suspense>
    );
}
