/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,

  async redirects() {
    return [
      {
        source: "/browse",
        destination: "/browse/decentraland",
        permanent: true,
      },
    ];
  },
};
