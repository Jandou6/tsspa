const webpack = require('webpack');
const path = require('path');
const webpack_dev_middleware = require('webpack-dev-middleware');
const express = require('express');
const app = express();
const webpack_config = require('../webpack.config');
const compiler = webpack(webpack_config);
let WebpackDevServer = require("webpack-dev-server");

async function send_dev_index(ctx) {
  console.log('user get', ctx.request.url);
  const filename = path.join(compiler.outputPath, 'index.html');

  await (new Promise(
    (resolve, reject) => {
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          reject(err)
        }
        ctx.response.type = 'html';
        ctx.response.body = result;
        resolve();
      })
    })
  );
}


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
// app.use(webpack_dev_middleware(compiler, serverConfig));
// app.get('/', send_dev_index);
// app.listen(8080, () => console.log('Example app listening on port 3000!'))
const PORT = '8080';
const HOST = '0.0.0.0';
let server = new WebpackDevServer(compiler, serverConfig);

server.listen(PORT, HOST, function() {
  console.log('listening on ' + HOST + ' : ' + PORT);
});