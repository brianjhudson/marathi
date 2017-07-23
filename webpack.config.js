var webpack = require("webpack");
var path = require("path");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {
  entry: [
    "./src/app.js"
  ]
  , module: {
      loaders: [

        { test: /\.js$/, loaders: [ 'babel' ]},
        { test: /\.html$/, loader: 'html' },
        { test: /(\.css)$/, loaders: [ 'style', 'css' ] },
        { test: /(\.scss)$/, loaders: [ 'style', 'css', 'sass' ] },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=fonts/[name].[ext]' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000&name=fonts/[name].[ext]' },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?name=images/[name].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false$name=images/[name].[ext]'
          ]
        }
      ]
  }
  , resolve: {
      extensions: ["", ".js", ".css"]
  }
  , output: {
      path: __dirname + "/dist/"
      , publicPath: "/"
      , filename: "bundle.js"
  }
  , devServer: {
      contentBase: "http://127.0.0.1:3000"
  }
  , plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"    
    }),    
    new ngAnnotatePlugin({
    add: true,
    // other ng-annotate options here 
    }), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
