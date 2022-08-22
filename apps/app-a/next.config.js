const withTM = require("next-transpile-modules")(["components", "layouts"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

const FlavorResolverPlugin = {
  apply: (compiler) => {
    compiler.hooks.resolve.tapAsync(
      "FlavorResolverPlugin",
      (request, context, cb) => {
        if (request.request === "components") {
          const customFileRequest = {
            ...request,
            request: `components/${process.env.APP || "_common"}`,
          };

          compiler.doResolve(
            compiler.ensureHook("resolve"),
            customFileRequest,
            null,
            context,
            cb
          );
        } else {
          cb();
        }
      }
    );
  },
};

module.exports = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,

    webpack: (config) => {
      config.resolve.plugins = [FlavorResolverPlugin];
      console.log(config.resolve.plugins);

      return config;
    },
  })
);
