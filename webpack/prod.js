const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const CONFIG = require('./config');
module.exports = {
  entry: {
    commons: [...CONFIG.LIBRARIES],
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  devtool: 'hidden-source-map',
  mode: 'production',
  module: {
    rules: [{
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: false,
                modules: true,
                importLoaders: 3,
                localIdentName: '[local]_[chunkhash:5]',
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                plugins: function () {
                  return [
                    require('autoprefixer')({
                      browsers: [
                        'Chrome >= 35',
                        'Firefox >= 38',
                        'Edge >= 12',
                        'Explorer >= 10',
                        'iOS >= 8',
                        'Safari >= 8',
                        'Android 2.3',
                        'Android >= 4',
                        'Opera >= 12',
                      ]
                    }),
                  ];
                },
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: false,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              }
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.png$/,
        use: `url-loader?limit=10&mimetype=image/png&name=assets/[name]_[hash:5].[ext]&publicPath=${CONFIG.PUBLIC_PATH_ASSET}`,
        exclude: /(node_modules|libs)/,
      },
      {
        test: /\.svg$/,
        use: `url-loader?limit=10&mimetype=image/svg+xml&name=assets/[name]_[hash:5].[ext]&publicPath=${CONFIG.PUBLIC_PATH_ASSET}`,
        exclude: /(node_modules|libs)/,
      },
      {
        test: /\.(jpg|gif|ico)$/,
        use: `url-loader?limit=10&name=assets/[name]_[hash:5].[ext]&publicPath=${CONFIG.PUBLIC_PATH_ASSET}`,
        exclude: /(node_modules|libs)/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(CONFIG.DIST_DIST, {
      root: CONFIG.DIST_PATH,
    }),

    new WebpackMd5Hash(),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: '[name]_[chunkhash:5].css',
      allChunks: true,
      ignoreOrder: true,
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
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
        parallel: 4
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      }
    },
  }
}