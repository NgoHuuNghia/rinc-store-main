/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.rawg.io', 
      'cdn.akamai.steamstatic.com',
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
    ],
  },
}

module.exports = nextConfig