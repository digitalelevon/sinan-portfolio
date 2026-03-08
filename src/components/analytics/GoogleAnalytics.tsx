"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || hasInteracted) return;

        const handleInteraction = () => {
            setHasInteracted(true);
            ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
                window.removeEventListener(event, handleInteraction, {
                    capture: true,
                })
            );
        };

        ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
            window.addEventListener(event, handleInteraction, {
                passive: true,
                capture: true,
            })
        );

        // Fallback: forcefully load after 6 seconds even without interaction
        const fallbackTimer = setTimeout(() => {
            handleInteraction();
        }, 6000);

        return () => {
            clearTimeout(fallbackTimer);
            ["scroll", "mousemove", "touchstart", "keydown"].forEach((event) =>
                window.removeEventListener(event, handleInteraction, {
                    capture: true,
                })
            );
        };
    }, [hasInteracted]);

    if (!hasInteracted || !GA_ID) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
}
