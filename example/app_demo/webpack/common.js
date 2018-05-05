const webpack = require('webpack');
const CONFIG = require('./config');

module.exports = {
  entry: {
    app: [
      CONFIG.ENTRY,
    ]
  },

  output: {
    path: CONFIG.DIST_PATH,
    publicPath: CONFIG.PUBLIC_PATH,
  },

  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js'],
    modules: [
      'node_modules',
    ],
    alias: {
      "@src": CONFIG.SRC_PATH,
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'happypack/loader?id=babel',
          'happypack/loader?id=ts',
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.json$/,
        loader: 'happypack/loader?id=json',
        exclude: /(node_modules)/,
      }
    ],
  },
}