// Importa la configurazione i18n da next-i18next
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  // la pagina contatti non c'è più: l'email ora è in home (vale anche per /it/contact)
  async redirects() {
    return [{ source: '/contact', destination: '/', permanent: true }];
  },
};

module.exports = nextConfig;
