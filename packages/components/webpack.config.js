const { resolve } = require("path");

module.exports = {
  entry: "./index.ts",
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [
      `packages/components/${process.env.APP}`,
      `packages/components/_common`,
      "node_modules",
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
