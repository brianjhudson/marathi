module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080"
    , "./src/app.js" ]

  , module: {
      loaders: [
        {
          test: /\.js/ // REGEX to find any .js files
          , exclude: /node_modules/
          , loader: "babel"
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
};
