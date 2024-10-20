/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("next").NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withPlausibleProxy } = require('next-plausible');

module.exports = withPlausibleProxy({
  domain: 'gaylordjulien.dev',
  scriptName: '4684481',
  customDomain: 'https://pble.gaylordjulien.dev',
})({
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        hostname: 'www.gaylordjulien.dev',
      },
      {
        hostname: 'minio-dcgc4ow.gutter8507.cc',
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
});
