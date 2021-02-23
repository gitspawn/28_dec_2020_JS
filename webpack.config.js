<<<<<<< HEAD
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
  // mode: 'development'
  plugins: [
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
=======
let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' })],
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
>>>>>>> 7536e6f910a012de42e149ddc29b71ed02985a3c
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
<<<<<<< HEAD
        },

        // options: {
        //   presets: ["@babel/preset-env"],
        // },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"],
=======
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
>>>>>>> 7536e6f910a012de42e149ddc29b71ed02985a3c
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
<<<<<<< HEAD
          // Exract css
=======
          // Estract css
>>>>>>> 7536e6f910a012de42e149ddc29b71ed02985a3c
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
<<<<<<< HEAD
    ],
  },

  // devServer: {
  //   contentBase: path.join(__dirname, "build"),
  //   compress: true,
  //   port: 9000,
  // },
};
=======

    ]
  },
  devServer: {
    open: true,
    watchOptions: {
      poll: true,
      ignored: "/node_modules/",
    },
  },
}
>>>>>>> 7536e6f910a012de42e149ddc29b71ed02985a3c
