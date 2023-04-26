const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};