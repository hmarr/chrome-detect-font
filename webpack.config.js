const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background/index.ts",
    content: "./src/content/index.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  devtool: "inline-cheap-module-source-map",
  plugins: [
    // Clear out the dist directory
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    // Copy over the manifest.json
    new CopyWebpackPlugin([{ from: "manifest.json" }, { from: "images/*" }]),
  ],
};
