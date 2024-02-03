const withMDX = require("@next/mdx")();
const { withContentlayer } = require("next-contentlayer");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(withContentlayer(withMDX(nextConfig)));
