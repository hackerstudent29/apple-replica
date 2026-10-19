/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com',
      },
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
    ],
  },
};

export default nextConfig;
// dev-reload
