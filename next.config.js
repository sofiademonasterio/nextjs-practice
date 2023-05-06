/** @type {import('next').NextConfig} */
const nextConfig = {
    images  : {
        domains: ['api.dicebear.com']
    }
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/next-gitlab-pages/' : '',
  trailingSlash: true
}
