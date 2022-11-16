/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
};

module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // webpack(config) {
//   //   config.module.rules.push({
//   //     test: /\.svg$/i,
//   //     issuer: /\.[jt]sx?$/,
//   //     use: ["@svgr/webpack"],
//   //   });

//   //   return config;
//   // },
// };
