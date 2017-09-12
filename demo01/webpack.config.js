const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
  app: './src/index.js',
  allGeometries: './src/all-geometries.js',
  earth01: './src/earth01-demo.js',
  earth02: './src/earth02-demo.js',
  rain01: './src/rain01-demo.js',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      title: 'Three.js demo'
    }),
    new htmlWebpackPlugin({
      filename: 'earth01.html',
      title: 'earth01',
      chunks: ['earth01']
    }),
    new htmlWebpackPlugin({
      filename: 'earth02.html',
      title: 'earth02',
      template: './index.html',
      chunks: ['earth02']
    }),
    new htmlWebpackPlugin({
      filename: 'rain01.html',
      title: 'rain01',
      template: './index.html',
      chunks: ['rain01']
    }),
    new htmlWebpackPlugin({
      filename: 'test.html',
      title: 'test.html'
    })
  ]
}