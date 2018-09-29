const os = require('os');
const HappyPack = require('happypack');
const happypack_thread_pool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  plugins: [
    new HappyPack({
      id: 'babel',
      threadPool: happypack_thread_pool,
      loaders: ['babel-loader'],
    }),

    new HappyPack({
      id: 'url',
      threadPool: happypack_thread_pool,
      loaders: ['url-loader'],
    }),
  ],
}