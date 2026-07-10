import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFD700",
                secondary: "#B8860B",
                accent: "#DAA520",
                dark: {
                    DEFAULT: "#0A0A0A",
                    100: "#141414",
                    200: "#1F1F1F",
                },
            },
            animation: {
                marquee: "marquee 30s linear infinite",
                "marquee-reverse": "marquee 30s linear infinite reverse",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
