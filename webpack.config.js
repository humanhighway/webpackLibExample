module.exports = {
  // entry: "./js/lib",
  resolve: {
    alias: {
      "detect": "./vendor/detect.min.js"
    },
    modulesDirectories: [ 'node_modules' ]
  },
  output: {
    // path: "./js",
    publicPath: "./js/common/",
    filename: "lib.js",
    library: "lib",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" }
    ]
  }
}