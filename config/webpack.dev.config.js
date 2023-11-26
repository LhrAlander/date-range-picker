const path= require('path')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge').merge
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/dev.tsx'),
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 6789,
        compress: true,
    },
    plugins: [new HtmlWebpackPlugin()]
}

module.exports = merge(baseConfig, config)
