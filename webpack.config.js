const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressWebpackPlugin = require('progress-bar-webpack-plugin');
const packageJSON = require('./package');

const defaultConf = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.jsx',
    ],
  },
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
    path: path.join(__dirname, 'build'),
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'file-loader?name=[path][name].[ext]?v=[hash:base64]',
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader', {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        ],
      }],
  },
  plugins: [
    new webpack.DefinePlugin({
      version: JSON.stringify(packageJSON.version),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
    new CopyWebpackPlugin([
      {
        context: './',
        from: 'assets/**/*',
      },
    ]),
    new ProgressWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  devtool: 'source-map',
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
  },
};

module.exports = defaultConf;
