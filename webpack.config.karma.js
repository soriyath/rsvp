/**
 * Webpack Configuration for Karma
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {

  externals: {
    cheerio: 'window',
    jsdom: 'window',
    mocha: 'mocha',
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.css$/,
        use: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        use: 'css-loader!sass-loader',
      }
    ],

    noParse: [/node_modules\/sinon\//],

    preLoaders: [
      {
        test: /\.js$/,
        use: { loader: 'istanbul-instrumenter-loader' },
        include: path.resolve('src'),
        exclude: path.resolve('node_modules'),
      },
      {
        test: [/\.spec.js$/, /\.js$/],
        use: 'babel-loader',
        include: [
          path.resolve('test'),
          path.resolve('scripts'),
        ],
        exclude: path.resolve('node_modules'),
      }
    ]
  },

  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
      components: path.join(__dirname, 'src/components'),
      scripts: path.join(__dirname, 'scripts'),
    },
    extensions: ['', '.css', '.js', '.jsx', '.json', '.scss'],
  },

};
