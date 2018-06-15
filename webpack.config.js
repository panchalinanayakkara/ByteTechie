var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.jsx',
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
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx']
  },
  devServer: {
    inline: false,
    contentBase: path.join(__dirname, "/"),
    compress: true
  },
  devtool: "source-map"
}
