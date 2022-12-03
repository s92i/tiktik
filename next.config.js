/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    domains: ['yt3.ggpht.com', 's01.pic4net.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
