/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/welcome",
        destination: "https://app.loch.one/welcome",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
