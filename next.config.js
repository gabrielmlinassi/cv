module.exports = {
  async redirects() {
    return [
      {
        source: "/gallery",
        destination:
          process.env.NODE_ENV === "production"
            ? `https://gallery.gabrielmlinassi.com`
            : `http://localhost:4000`,
        permanent: true,
      },
    ];
  },
};
