const base =
  process.env.NODE_ENV === "production"
    ? "https://gabrielmlinassi.com"
    : "http://localhost:4000";

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/gallery",
          destination: `${base}/gallery`,
        },
      ],
    };
  },
};
