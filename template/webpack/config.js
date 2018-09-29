const path = require('path');

module.exports = {
  ENTRY: path.resolve(__dirname, '../src/index.tsx'),
  DIST_PATH:path.resolve(__dirname, '../dist'),
  PUBLIC_PATH: '/',
  SRC_PATH: path.resolve(__dirname, '../src'),
  INDEX_HTML: 'index.html',
  ROOT_PATH: path.resolve(__dirname, '..'),
  HTML_TEMPLATE_PATH: path.resolve(__dirname, '../src/index.html'),
  DLL_PATH: path.resolve(__dirname, '../webpack/dll'),
  PUBLIC_PATH_ASSET: path.resolve(__dirname, '../dist/assets'),
}