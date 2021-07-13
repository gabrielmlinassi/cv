module.exports = {
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: `https://www.gallery.gabrielmlinassi.com`,
        permanent: true,
      },
    ];
  },
};
