const path = require('path');

module.exports = {
  ENTRY: path.resolve(__dirname, '../src/index.tsx'),
  DIST_PATH:path.resolve(__dirname, '../dist'),
  PUBLIC_PATH: '/',
  SRC_PATH: path.resolve(__dirname, '../src'),
  INDEX_HTML: 'index.html',
  HTML_TEMPLATE_PATH: path.resolve(__dirname, '../src/index.html'),
}