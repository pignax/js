const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          })
      }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
