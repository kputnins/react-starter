import { DefinePlugin, WatchIgnorePlugin, Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const devConfig: Configuration & { devServer: DevServerConfiguration } = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
  },
  target: 'web',
  devtool: 'eval-nosources-cheap-module-source-map',
  plugins: [
    new DefinePlugin({
      'process.env.name': JSON.stringify('Devy McDevFace'),
    }),
    new ReactRefreshWebpackPlugin(),
    new WatchIgnorePlugin({ paths: [/scss\.d\.ts$/, /\.test\.tsx?$/] }),
  ],
  stats: 'errors-only',
};

export default devConfig;
