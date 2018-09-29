const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIG = require('./config');
module.exports = {

  devtool: 'cheap-module-inline-source-map',
  mode: 'development',
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'tslint-loader',
          options: {
            emitErrors: false,
          }
        }],
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /(node_modules)/,
        use: `url-loader?limit=10&name=asset/[name]_[hash:5].[ext]`,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: CONFIG.INDEX_HTML,
      template: CONFIG.HTML_TEMPLATE_PATH,
    }),
  ],
}