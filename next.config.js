/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.khorshidhasht.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
