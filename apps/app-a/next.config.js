const withTM = require("next-transpile-modules")(["layouts"]);

module.exports = withTM({
  reactStrictMode: true,
});
