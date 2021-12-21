const bsconfig = require('../../bsconfig.json')
const withPlugins = require('next-compose-plugins')

if (!process.env.NEXTAUTH_URL) {
  console.warn('\x1b[33mwarn', '\x1b[0m', 'NEXTAUTH_URL environment variable is not set.')
  if (process.env.URL) {
    process.env.NEXTAUTH_URL = process.env.URL
    console.warn(
      '\x1b[33mwarn',
      '\x1b[0m',
      `NEXTAUTH_URL environment variable is not set. Using Netlify URL ${process.env.URL}.`
    )
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      // Object.assign(config.resolve.alias, {
      //   react: 'preact/compat',
      //   'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      //   'react-dom/test-utils': 'preact/test-utils',
      //   'react-dom': 'preact/compat',
      // })
    }

    return config
  },
}
const withNextTranslate = require('next-translate')(withBundleAnalyzer(config))

const transpileModules = ['rescript', 'ui'].concat(bsconfig['bs-dependencies'])

const withTM = require('next-transpile-modules')(transpileModules)

module.exports = withPlugins([withTM, withNextTranslate], config)
