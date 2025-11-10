import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pull all dependencies into .next build
  output: 'standalone',
};

export default nextConfig;
