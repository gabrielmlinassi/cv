/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {NextConfigPlugins} */
const plugins = [];

/** @type {NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
};

plugins.push(
  nextMDX({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })
);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
