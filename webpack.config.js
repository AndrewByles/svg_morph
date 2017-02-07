const webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: './dist',
    filename: 'index.js',
    sourceMapFilename: 'index.map'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/, loader: 'babel'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 4000
  }
};
