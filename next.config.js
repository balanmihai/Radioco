/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "radioco.vercel.app",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "public.radio.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.radio.co",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
