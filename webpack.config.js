const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, 'public')
  },

  mode: 'none',
  devtool: 'source-map',
//   watch: true,
  devServer: {
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
      }),
      new CopyPlugin([
          { from: './index.css' }
      ])
  ]
};