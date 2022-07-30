/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  reactStrictMode: true,
  swcMinify: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_staticImage: true,
});
module.exports = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  module: {
    rules: [
      {
        test: /.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      },
    ],
  },
});
