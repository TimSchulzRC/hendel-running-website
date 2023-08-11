const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
    port: 3000,
    open: {
      app: {
        name: "Google Chrome",
      },
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
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
        test: /\.(png|jpe?g|webp|ico|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[hash:8][ext]",
        },
      },
    ],
  },
  plugins: [
    new RobotstxtPlugin({}),
    new HtmlBundlerPlugin({
      // define a relative or absolute path to template pages,
      // generated output HTML files keeps the original file structure relative to the entry path
      entry: "src/pages/",

      // OR define entry templates manually
      // entry: {
      //   index: "src/pages/index.html", // => dist/index.html
      //   "about-us": "src/pages/about-us.html", // => dist/about-us.html
      //   // etc.
      // },

      js: {
        // output filename of JS extracted from source script specified in `<script>`
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        // output filename of CSS extracted from source file specified in `<link>`
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
};
