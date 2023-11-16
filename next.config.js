/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.khorshidhasht.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
