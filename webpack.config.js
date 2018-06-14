var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/pharmacy.jsx',
  output: {
    path: path.join(__dirname, "Client"),
    filename: 'bundle.js'
  },
  //mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: "babel-loader",
          //exclude: /node_modules/,
          options: {
            presets: ["env", "react"]
          }
        }
      }
    ]
  },
  resolve:{
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true
  },
  devtool: "source-map"
}
