/** @type {import('next').NextConfig} */
const nextConfig = {
    // Only use 'export' and basePath for production builds
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    basePath: process.env.NODE_ENV === 'production' ? '/pivot-for-dancers' : '',
    trailingSlash: true,
    // Optional: Add these for better GitHub Pages compatibility
    images: {
        unoptimized: true
    },
    // Ensure assetPrefix is set for production
    assetPrefix: process.env.NODE_ENV === 'production' ? '/pivot-for-dancers' : '',
}

module.exports = nextConfig