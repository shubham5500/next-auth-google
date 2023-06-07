/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: '1035047389640-ij0f70h3kt8gqn056k26alrhfl6gc58g.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXT_AUTH_URL: 'http://localhost:3004',
    JWT_SECRET: 'mLloUux+DYMmrKRbILIbUn399J2lk9x5/tfxb8aTPtM=',
  },
}

module.exports = nextConfig
