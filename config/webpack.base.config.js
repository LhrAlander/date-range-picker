const path= require('path')
module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].dist.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
