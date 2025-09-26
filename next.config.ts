/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Cache images, fonts, CSS, JS for 1 year
        source:
          "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|css|js|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache HTML minimally so content updates immediately
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biobox.whdev.in",
        port: "",
        pathname: "/storage/**", // allow all images under /storage
      },
    ],
    unoptimized: process.env.NEXT_PUBLIC_DISABLE_IMAGE_OPTIMIZATION === "true", // optional toggle
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_IMAGE_URL: process.env.NEXT_PUBLIC_IMAGE_URL,
    NEXT_PUBLIC_IMAGE_PATH: process.env.NEXT_PUBLIC_IMAGE_PATH,
  },
};

module.exports = nextConfig;
