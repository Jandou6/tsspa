const HappyPack = require('happypack');

const happypack_thread_pool = HappyPack.ThreadPool({ size: 4 });

module.exports = {
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happypack_thread_pool,
      loaders: ['babel-loader'],
    }),
    new HappyPack({
      id: 'ts',
      threadPool: happypack_thread_pool,
      loaders: [
        {
          path: 'ts-loader',
          query: { happyPackMode: true }
        }
      ],
    }),
    new HappyPack({
      id: 'css',
      threadPool: happypack_thread_pool,
      loaders: ['css-loader'],
    }),
    new HappyPack({
      id: 'css_module',
      threadPool: happypack_thread_pool,
      loaders: [
        {
          path: 'css-loader',
          query: {
            modules: true,
            importLoaders: 3,
            localIdentName: '[local]_[hash:base64:5]',
          }
        }
      ],
    }),
    new HappyPack({
      id: 'sass',
      threadPool: happypack_thread_pool,
      loaders: [
        {
          path: 'sass-loader',
          query: {
            sourceMap: false
          }
        }
      ],
    }),
    new HappyPack({
      id: 'json',
      threadPool: happypack_thread_pool,
      loaders: ['json-loader'],
    }),

    new HappyPack({
      id: 'url',
      threadPool: happypack_thread_pool,
      loaders: ['url-loader'],
    }),
  ],
}