const path = require('path');
const webpack = require('webpack');

const CONFIG = require('./config');

module.exports = {
  entry: {
    vender: [
      ...CONFIG.LIBRARIES,
    ],
  },
  output: {
    path: CONFIG.DLL_PATH,
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll/[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ]
};