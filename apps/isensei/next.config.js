const bsconfig = require("../../bsconfig.json");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withNextTranslate = require("next-translate");
const transpileModules = ["rescript", "@isensei/ui"].concat(
  bsconfig["bs-dependencies"]
);
const withTM = require("next-transpile-modules")(transpileModules);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isDevelopment = process.env.NODE_ENV === "development";

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app https://www.youtube.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src *.codesandbox.io giscus.app https://www.youtube.com;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// NOTE: Pwa config was deleted because it was throwing errors
// - The root value has an unexpected property, pwa, which is not in the list of allowed properties (amp, analyticsId, assetPrefix, basePath, cleanDistDir,
//   compiler, compress, crossOrigin, devIndicators, distDir, env, eslint, excludeDefaultMomentLocales, experimental, exportPathMap, future, generateBuildId,
//   generateEtags, headers, httpAgentOptions, i18n, images, onDemandEntries, optimizeFonts, output, outputFileTracing, pageExtensions, poweredByHeader,
//   productionBrowserSourceMaps, publicRuntimeConfig, reactStrictMode, redirects, rewrites, sassOptions, serverRuntimeConfig, staticPageGenerationTimeout, swcMinify,
//   trailingSlash, typescript, useFileSystemPublicRoutes, webpack).
//   - The root value has an unexpected property, module, which is not in the list of allowed properties (amp, analyticsId, assetPrefix, basePath, cleanDistDir,
//     compiler, compress, crossOrigin, devIndicators, distDir, env, eslint, excludeDefaultMomentLocales, experimental, exportPathMap, future, generateBuildId,
//     generateEtags, headers, httpAgentOptions, i18n, images, onDemandEntries, optimizeFonts, output, outputFileTracing, pageExtensions, poweredByHeader,
//     productionBrowserSourceMaps, publicRuntimeConfig, reactStrictMode, redirects, rewrites, sassOptions, serverRuntimeConfig, staticPageGenerationTimeout,
//     swcMinify, trailingSlash, typescript, useFileSystemPublicRoutes, webpack).
// pwa: {
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   buildExcludes: [/middleware-manifest\.json$/],
//   disable: isDevelopment,
//   mode: "production",
// },

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx", "mjs"],
  eslint: {
    dirs: ["pages", "components", "lib", "layouts", "scripts"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.m?jsx?$/,
      resolve: {
        fullySpecified: false,
      },
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      resolve: {
        fullySpecified: false,
      },
    });

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      // Object.assign(config.resolve.alias, {
      //   react: 'preact/compat',
      //   'react/jsx-runtime': require.resolve('react/jsx-runtime'),
      //   'react-dom/test-utils': 'preact/test-utils',
      //   'react-dom': 'preact/compat',
      // })
    }

    config.resolve.fallback = { fs: false };

    return config;
  },
};

// withTM(withNextTranslate(withBundleAnalyzer(nextConfig)));

const plugins = [withTM, withNextTranslate, withBundleAnalyzer];
module.exports = (_phase, { defaultConfig }) =>
  plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
