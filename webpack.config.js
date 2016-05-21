var webpack = require('webpack')

var config = {
  entry: './src/index',
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'ReactSettingsPane.js',

    library: 'ReactSettingsPane',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = config