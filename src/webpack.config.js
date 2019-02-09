var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = { //holds the webpack configuration
  entry:  SRC_DIR + "/app/index/html",//tell webpack which file you should start your transpiling and building your journey in
  output: {         //tell webpack where to output everything we create
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: "/\.js?/"        //tell webpack which file should it test
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          preset: ["react","es2015","stage-2"]
        }
      }
    ]
  }
}

module.exports = config;
