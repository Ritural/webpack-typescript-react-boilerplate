const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Sets up sourcemaps to be used in the browser

  plugins: [new MinifyPlugin()]
});
