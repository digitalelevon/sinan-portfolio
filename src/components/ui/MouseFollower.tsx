"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
    const [isVisible, setIsVisible] = useState(false);

    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const dotPos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    const isHovering = useRef(false);
    const isClicking = useRef(false);

    useEffect(() => {
        // Hydration mismatch prevention: only run on client
        // Disable on touch devices and if user prefers reduced motion
        const isTouch = window.matchMedia("(pointer: coarse)").matches;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || prefersReducedMotion) {
            return;
        }

        const initialFrame = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Initial position snap
            if (dotPos.current.x === 0 && dotPos.current.y === 0) {
                dotPos.current.x = e.clientX;
                dotPos.current.y = e.clientY;
                ringPos.current.x = e.clientX;
                ringPos.current.y = e.clientY;
            }

            // Check if hovering over clickable element
            const hoveredEl = e.target as HTMLElement;
            if (hoveredEl && typeof hoveredEl.closest === 'function') {
                const isInteractive = !!hoveredEl.closest("a, button, input, select, textarea, [role='button'], .interactable");
                isHovering.current = isInteractive;
            }
        };

        const onMouseDown = () => { isClicking.current = true; };
        const onMouseUp = () => { isClicking.current = false; };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mousedown", onMouseDown, { passive: true });
        window.addEventListener("mouseup", onMouseUp, { passive: true });

        let animationFrameId: number;
        let lastHovering = false;
        let lastClicking = false;

        const render = () => {
            // Lerp variables for smooth tracking
            const speedDot = 0.6;
            const speedRing = 0.15; // Lower = more delay

            dotPos.current.x += (mouse.current.x - dotPos.current.x) * speedDot;
            dotPos.current.y += (mouse.current.y - dotPos.current.y) * speedDot;

            ringPos.current.x += (mouse.current.x - ringPos.current.x) * speedRing;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * speedRing;

            const hovering = isHovering.current;
            const clicking = isClicking.current;

            const scale = clicking ? 0.8 : (hovering ? 1.8 : 1);
            const dotScale = hovering ? 0 : 1;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
            }

            // Only update non-transform styles if state changed
            if (hovering !== lastHovering) {
                if (dotRef.current) {
                    dotRef.current.style.opacity = hovering ? "0" : "1";
                }
                if (ringRef.current) {
                    ringRef.current.style.borderColor = hovering ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)";
                    ringRef.current.style.backgroundColor = hovering ? "rgba(255, 255, 255, 0.05)" : "transparent";
                    if (hovering) {
                        ringRef.current.classList.add("mix-blend-difference");
                    } else {
                        ringRef.current.classList.remove("mix-blend-difference");
                    }
                }
                if (glowRef.current) {
                    glowRef.current.style.opacity = hovering ? "0.6" : "0.3";
                }
                lastHovering = hovering;
            }

            if (clicking !== lastClicking) {
                lastClicking = clicking;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            cancelAnimationFrame(animationFrameId);
            cancelAnimationFrame(initialFrame);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            {/* Soft Ambient Glow */}
            <div
                ref={glowRef}
                className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-white/10 blur-[80px] transition-opacity duration-300 will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
            />
            {/* Outer Ring */}
            <div
                ref={ringRef}
                className="absolute left-0 top-0 h-10 w-10 rounded-full border border-white/30 backdrop-blur-[2px] transition-colors duration-300 will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
            />
            {/* Inner Dot - Hidden during hover */}
            <div
                ref={dotRef}
                className="absolute left-0 top-0 h-2 w-2 rounded-full bg-white transition-opacity duration-300 will-change-transform"
                style={{
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)",
                }}
            />
        </div>
    );
}
