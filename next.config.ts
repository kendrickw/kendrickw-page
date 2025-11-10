import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Deploying static site to github.io
  output: 'export',
  // Optional: if deploying to a subdirectory like https://username.github.io/your-repo-name
  // basePath: '/your-repo-name',
  assetPrefix: '/kendrickw',
};

export default nextConfig;
