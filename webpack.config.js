var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './dev'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env'],
        }
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};