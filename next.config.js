/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['65.20.79.129','images.bhaskarassets.com','ngs-space1.sgp1.digitaloceanspaces.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: '65.20.79.129:1337',
    //   },
    // ],
  }
}

module.exports = nextConfig
