const webpack = require('webpack');
const webpack_config = require('../webpack.config');
let WebpackDevServer = require("webpack-dev-server");


const devServerOptions = Object.assign({}, webpack_config.devServer, {
  historyApiFallback: true,
  contentBase: '../dist',
  hot: true,
  host: '127.0.0.1',
  stats: {
    colors: true
  }
});
const PORT = '8080';
const HOST = '127.0.0.1';
WebpackDevServer.addDevServerEntrypoints(webpack_config, devServerOptions);
const compiler = webpack(webpack_config);
let server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, HOST, function() {
  console.log('listening on http://' + HOST + ':' + PORT);
});