const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

let htmlPageNames = ["sebastian", "about-us"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  console.log(name);
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: ["commons", `${name}`], // respective JS and SCSS files
  });
});

module.exports = {
  entry: {
    commons: ["bootstrap", path.resolve(__dirname, "src/scss/style.scss")],
    index: path.resolve(__dirname, "src/js/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].[contenthash].min.css",
    }),
    new HtmlWebpackPlugin({
      title: "Hendel Running",
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ].concat(multipleHtmlPlugins),
};