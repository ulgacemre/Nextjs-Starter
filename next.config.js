


const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  sw: 'service-worker.js',
  //...
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
})