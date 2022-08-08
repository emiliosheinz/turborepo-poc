const withTM = require("next-transpile-modules")(["components", "layouts"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.modules = [
      `packages/components/${process.env.APP}`,
      `packages/components/_common`,
      "node_modules",
    ];

    return config;
  },
});
