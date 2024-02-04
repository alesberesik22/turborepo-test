/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: 'standalone',
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingIncludes: {
      '/eslint-config-custom': ['./eslint-config-custom/**/*'],
      '/tsconfig': ['./tsconfig/**/*'],
      '/@repo/ui': ['./@repo/ui/**/*'],
    }
  },
};
