/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  prod: {
    experimental: {
      runtime: "experimental-edge",
    },
  },
};

module.exports = nextConfig;
