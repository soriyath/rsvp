/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.base');
var config = webpackConfig();
var port = 5000;

// Settings for dev server
var babelLoader = {
    test: /\.jsx?$/,
    use: ['babel-loader?presets[]=react'],
    exclude: /node_modules/,
};

// http://www.cnblogs.com/Answer1215/p/4312265.html
// The source map file will only be downloaded if you have source maps enabled and your dev tools open.
config.devtool = 'eval-source-map';
config.entry = config.entry.concat([
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server'
]);
config.module.rules.push(babelLoader);
config.output.path = __dirname;
config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

new WebpackDevServer(webpack(config), {
    publicPath: '/static/',
    hot: true,
    historyApiFallback: true
}).listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:5000');
});
