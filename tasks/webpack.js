var webpackConfig = require('../webpack.config.js');
var path = require('path');

module.exports = {
  options: webpackConfig,
  build: {
    // Use the default webpack options.
  },
  test: {
    entry: './tests/runner.js',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'tests.js',
    },

  },
};