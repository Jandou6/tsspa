const merge = require('webpack-merge');
const config_common = require('./webpack/common');

let webpack_config =  config_common;
if (process.env.NODE_ENV === 'production') {
  const config_prod = require('./webpack/prod');
  webpack_config = merge.smart(webpack_config, config_prod)
} else {
  const config_dev = require('./webpack/dev');
  webpack_config = merge.smart(webpack_config, config_dev)
}


module.exports = webpack_config;