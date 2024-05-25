/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
