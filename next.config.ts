/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biobox.whdev.in",
        pathname: "/storage/**",
      },
    ],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_PATH: process.env.NEXT_PUBLIC_IMAGE_PATH,
  },
};

module.exports = nextConfig;
