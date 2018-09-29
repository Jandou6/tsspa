const cssnext = require("postcss-cssnext");
const nested = require('postcss-nested');
module.exports = {
  plugins: [
    cssnext({
      browsers: [
        '>5%',
      ],
    }),
    nested(),
  ]
}