var webpack = require('webpack')

var config = {
  entry: './app',
  module: {
    loaders: [
      { loaders: [ 'babel' ] }
    ]
  },
  output: {
    filename: "app_compiled.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}

module.exports = config