const webpack = require('webpack');
const path = require('path');
const webpack_dev_middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
const webpack_config = require('../webpack.config');
const compiler = webpack(webpack_config);
let WebpackDevServer = require("webpack-dev-server");



const serverConfig = {
  watchOptions:{
    aggregateTimeout: 300, //延迟时间
    poll: 1000, // 轮询间隔
  },
  hot: true,
  inline: true,
  historyApiFallback: true,
  compress: true,
  disableHostCheck: true,
  staticOptions: {},
  stats: { colors: true },
  contentBase: path.join(__dirname, '../build'),
  publicPath: webpack_config.output.publicPath,
  headers: {
    'X-Custom-Header': 'yes'
  }
}
const PORT = '8080';
const HOST = '127.0.0.1';
let server = new WebpackDevServer(compiler, serverConfig);

server.listen(PORT, HOST, function() {
  console.log('listening on http://' + HOST + ' : ' + PORT);
});