/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only use 'export' for production builds
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    // Optional: Add these for better GitHub Pages compatibility
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig