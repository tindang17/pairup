var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
};