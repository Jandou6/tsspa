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
  LIBRARIES: [
    'react',
    'react-dom',
    'react-css-modules',
    'react-router-dom',
    //TODO: maybe add in the future.
    // 'redux',
    // 'react-redux',
    // 'react-router-redux',
  ]
}