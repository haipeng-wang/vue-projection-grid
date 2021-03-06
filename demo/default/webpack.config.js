/* eslint-disable */

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /dist/],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:  [/node_modules/, /dist/],
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?publicPath=/dist/&limit=10000&mimetype=image/svg+xml'}
    ],
  },
  devServer: {
    contentBase: './',
    port: 9001,
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      VueProjectionGrid: '../../dist/index',
    },
  },
};
