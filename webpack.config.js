var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "./src/app.js"
  ]
  , module: {
      loaders: [

        { test: /\.js$/, include: path.join( __dirname, 'src' ), loaders: [ 'ng-annotate', 'babel' ] },
        { test: /\.html$/, loader: 'html' },
        { test: /(\.css)$/, loaders: [ 'style', 'css' ] },
        { test: /(\.scss)$/, loaders: [ 'style', 'css', 'sass' ] },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
        // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }

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
      "$": "jquery"
      , 'window.jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
