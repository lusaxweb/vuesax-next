const path = require('path')
const baseWebpackConfig = require('../webpack.base.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
  entry: {
    'vuesax': './src/index.ts',
    'vuesax.min': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    library: 'Vuesax',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
})
