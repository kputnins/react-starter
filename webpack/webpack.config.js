const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = () => {
  const { env, analyze } = process.env;
  const envConfig = require(`./webpack.${env}.js`);
  const analyzeConfig = require(`./webpack.analyze.js`);
  return analyze
    ? merge(commonConfig, envConfig, analyzeConfig)
    : merge(commonConfig, envConfig);
};
