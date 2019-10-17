const webpack = require("webpack");

const config = {
  entry: "./app",
  module: {
    rules: [
      {
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  output: {
    filename: "app_compiled.js"
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};

module.exports = config;
