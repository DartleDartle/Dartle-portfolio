const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  // the contact page was removed; the email now lives on the home page (also covers /it/contact)
  async redirects() {
    return [{ source: '/contact', destination: '/', permanent: true }];
  },
};

module.exports = nextConfig;
