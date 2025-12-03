/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@heroicons/react'],
  },
}

module.exports = nextConfig
