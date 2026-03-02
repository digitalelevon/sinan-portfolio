import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ["lucide-react", "framer-motion"],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    images: {
        formats: ["image/avif", "image/webp"],
        qualities: [75, 85, 90, 100],
        minimumCacheTTL: 60,
    },
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
};

const analyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
