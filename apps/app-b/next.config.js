const withTM = require("next-transpile-modules")(["components", "layouts"]);

module.exports = withTM({
  reactStrictMode: true,
});
