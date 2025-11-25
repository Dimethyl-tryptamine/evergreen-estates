import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [], // instead of experimental.serverComponentsExternalPackages
  // Remove experimental.appDir entirely — appDir is now stable
  turbopack: {}, // empty object silences the Turbopack warning if you have a webpack config
};

export default nextConfig;
