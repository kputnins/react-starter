const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
  },
  target: 'web',
  devtool: 'eval-nosources-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Devy McDevFace'),
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.WatchIgnorePlugin({ paths: [/scss\.d\.ts$/, /\.test\.tsx?$/] }),
  ],
  stats: 'errors-only',
};
