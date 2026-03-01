/** @type {import('next').NextConfig} */

const nextConfig = {
    poweredByHeader: false,

    compress: true,

    reactStrictMode: true,

    images: {
        formats: ["image/avif", "image/webp"],
        qualities: [75, 85],
    },

    compiler: {
        removeConsole: true,
    },
};

module.exports = nextConfig;
