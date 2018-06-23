/**
 * Webpack Configuration
 */

/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.base');
var config = webpackConfig();

var babelLoader = {
    test: /\.jsx?$/,
    use: ['babel-loader'],
    exclude: /node_modules/,
};

// http://www.cnblogs.com/Answer1215/p/4312265.html
// The source map file will only be downloaded if you have source maps enabled and your dev tools open.
config.devtool = 'source-map';
config.module.loaders.push(babelLoader);
config.output.path = path.resolve('dist');
config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin()
]);

module.exports = config;
