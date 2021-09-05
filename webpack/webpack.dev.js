const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-nosources-cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Prody McProdFace"),
    }),
  ],
};
