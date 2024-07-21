/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: { webpackBuildWorker: true },
  webpack: (config) => {
    // camelCase style names from css modules
    config.module.rules
      ?.find(({ oneOf }) => !!oneOf).oneOf
      .filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = 'camelCase';
        }
      });
    return config;
  },
  transpilePackages:[
    "antd","rc-util",
    'rc-pagination',
    'rc-picker',
    "@ant-design",
    "@ant-design/cssinjs",
    "@ant-design/icons"
  ]
};

export default nextConfig;
