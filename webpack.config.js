const webpack = require("webpack");

const config = {
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  output: {
    //filename: 'ReactSettingsPane.js',
    library: "ReactSettingsPane",
    libraryTarget: "umd"
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};

module.exports = config;
