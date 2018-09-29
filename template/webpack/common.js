const webpack = require('webpack');
const CONFIG = require('./config');
const is_dev = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: [
      CONFIG.ENTRY,
    ]
  },

  output: {
    path: CONFIG.DIST_PATH,
    publicPath: CONFIG.PUBLIC_PATH,
    filename: 'app.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.css', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '/'
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: is_dev,
            modules: true,
            localIdentName: 'cmp_[local]_[hash:base64:5]',
          },
        },
        'postcss-loader',
      ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: is_dev ? '[chunkname].css' : '[chunkname].[hash].css',
      chunkFilename: is_dev ? '[name].css' : '[name].[hash].css',
    })
  ],
}