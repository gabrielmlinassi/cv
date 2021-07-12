const base =
  process.env.NODE_ENV === "production"
    ? "https://gabrielmlinassi.com"
    : "http://localhost:4000";

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: `${base}/gallery`,
        permanent: true,
      },
    ];
  },
};
