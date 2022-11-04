const path = require('path');

/** @type import('webpack').Configuration */
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "out"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
