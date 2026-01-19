import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/check-env';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
