module.exports = {
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: `https://gallery.gabrielmlinassi.com`,
        permanent: true,
      },
    ];
  },
};
