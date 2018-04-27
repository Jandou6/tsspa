const merge = require('webpack-merge');
const config_common = require('./webpack/common');
const config_happypack = require('./webpack/happypack.config');

let webpack_config =  merge.smart(config_common, config_happypack);

if (process.env.NODE_ENV === 'production') {
  const config_prod = require('./webpack/prod.js');
  webpack_config = merge.smart(webpack_config, config_prod)
} else {
  const config_dev = require('./webpack/dev.js');
  webpack_config = merge.smart(webpack_config, config_dev)
}


module.exports = webpack_config;