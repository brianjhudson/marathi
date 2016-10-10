const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080"
    , "./public/js/app.js" ]

  , module: {
      loaders: [
        {
          test: /\.js/ // REGEX to find any .js files
          , exclude: /node_modules/
          , loader: "babel"
        }
        , {
          test: /\.scss$/
          , loader: "webpack-sass-loader"
        }
        , {
          test: /\.css/
          , exclude: /node_modules/
          , loader: "style!css" // Two loaders, css first and then styles (but order different)
        }
        , {
          test: /\.html$/  // $ necessary for some reason
          , loader: "html"
        }
        , { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff" }
        , { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
      ]
  }
  , resolve: {
      extensions: ["", ".js", ".css"]
  }
  , output: {
      path: __dirname + "/"
      , filename: "bundle.js"
  }
  , devServer: {
      contentBase: "./"
  }
  , plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    })
  ]
};
