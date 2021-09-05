const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new StatoscopeWebpackPlugin(),
  ],
};
