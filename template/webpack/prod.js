const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const CONFIG = require('./config');
module.exports = {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpg|gif|ico|svg|png)$/,
        use: `url-loader?limit=10&name=assets/[name]_[hash:5].[ext]`,
        exclude: /(node_modules)/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(CONFIG.DIST_DIST, {
      root: CONFIG.DIST_PATH,
    }),
    new HtmlWebpackPlugin({
      filename: CONFIG.INDEX_HTML,
      chunks: ['app', 'commons'],
      favicon: CONFIG.FAVICON_PATH,
      template: CONFIG.HTML_TEMPLATE_PATH,
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          chunks: 'all'
        }
      }
    },
  }
}