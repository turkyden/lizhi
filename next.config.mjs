/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testingcf.jsdelivr.net',
      },
    ],
  },
};

export default nextConfig;
