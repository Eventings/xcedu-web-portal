const webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolve, cacheIdentifier } = require('./utils')
const load = require('./utils/dotenv')

const devEnvConfig = load('development')
const prodEnvConfig = load('production')

const definePluginOptions = (env = 'production', params = {}) => {
  const config = env === 'development' ? devEnvConfig : prodEnvConfig
  const options = Object.keys(config).reduce((target, key) => {
    if (key.startsWith('WEB_') || key === 'NODE_ENV') {
      target[key] = JSON.stringify(config[key])
    }
    return target
  }, {})
  return options
}

module.exports = env => ({
  entry: './src/root-config.js',
  output: {
    filename: env ==='development' ? 'main.js': 'main.[chunkhash:8].js',
    libraryTarget: "system",
    path: resolve('dist')
  },
  devtool: env === 'development' ? 'sourcemap': false,
  mode: env,
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.jsx?$/,
        exclude: [/node_module/],
        use: [{
          loader: 'cache-loader',
          options: {
            cacheDirectory: resolve('.cache/typescript'),
            cacheIdentifier: cacheIdentifier('typescript', env)
          }
        }, {
          loader: 'thread-loader',
          options: {
            workerParallelJobs: 50,
            poolRespawn: false,
            poolTimeout: 2000,
            name: 'typescript-pool'
          }
        }, {
          loader: 'babel-loader'
        }]
      }
    ]
  },
  devServer: {
    host: devEnvConfig.DEV_SERVER_HOST_NAME,
    port: devEnvConfig.DEV_SERVER_PORT,
    compress: true,
    open: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    https: devEnvConfig.DEV_SERVER_PROROCOL === 'https',
    proxy: {
      [devEnvConfig.WEB_REQUEST_BASE_URL]: {
        target: devEnvConfig.MODULE_API_BASE_URL,
        changeOrigin: true
      }
    },
    overlay: true,
    historyApiFallback: {
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': definePluginOptions(env)
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "public/index.html",
      templateParameters: {
        LOCAL_ENV: env === 'development',
        MODULE_FTP_BASE_URL: (env === 'development' ? devEnvConfig : prodEnvConfig).MODULE_FTP_BASE_URL,
        MODULE_COMMON_BASE_URL: (env === 'development' ? devEnvConfig : prodEnvConfig).MODULE_COMMON_BASE_URL,
        MODULE_API_BASE_URL: (env === 'development' ? devEnvConfig : prodEnvConfig).MODULE_API_BASE_URL
      }
    }),
    new CleanWebpackPlugin()
  ]
});
