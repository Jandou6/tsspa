const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CONFIG = require('./config');
module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?",
      "webpack/hot/dev-server"
    ]
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              emitErrors: false,
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            'happypack/loader?id=css_module',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: function () {
                  return [
                    require('autoprefixer')({ browsers: [
                      'Chrome >= 35',
                      'Firefox >= 38',
                      'Edge >= 12',
                      'Explorer >= 10',
                      'iOS >= 8',
                      'Safari >= 8',
                      'Android 2.3',
                      'Android >= 4',
                      'Opera >= 12',
                    ]}),
                  ];
                },
              },
            },
            'resolve-url-loader',
            'happypack/loader?id=sass',
          ],
        }),
        
      },
      {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract({
          use: 'happypack/loader?id=css',
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(jpg|png)$/,
        use: `url-loader?limit=10&name=asset/[name]_[hash:5].[ext]`,
        exclude: /(node_modules)/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: CONFIG.INDEX_HTML,
      chunks: ['app'],
      template: CONFIG.HTML_TEMPLATE_PATH,
    }),

    new ExtractTextPlugin({
      disable: true,
      filename: 'styles.css',
      allChunks: true,
    }),
  ],
}