const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

const PATHS = {

  dist: path.resolve(__dirname, "dist"),

  src: path.resolve(__dirname, "src"),
};

module.exports = {

  mode: isDev ? "development" : "production",

  entry: {
    main: ["@babel/polyfill", "./src/index.jsx"],
  },
  output: {

    path: `${PATHS.dist}/`,

    filename: `${isDev ? "[name].js" : "[name].[hash].js"}`,

    publicPath: isDev ? "http://localhost:1337/" : "http://localhost/dist/",
  },

  resolve: {

    extensions: [".js", ".jsx", ".json"],
  },

  devServer: {

    port: 1337,

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  plugins: [

    ...(isDev ? [] : [new CleanWebpackPlugin()]),

    new MiniCssExtractPlugin(),

    new WebpackManifestPlugin({

      writeToFileEmit: true,
    }),
  ],

  module: {

    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          "postcss-loader",
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
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
 
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
};
