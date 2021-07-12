module.exports = {
  async redirects() {
    return [
      {
        source: "/gallery",
        destination: `https://www.google.com`,
        permanent: true,
      },
    ];
  },
};
