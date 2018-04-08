'use strict'

const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

let webpackConfig = {
    context: path.resolve(__dirname, './test'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            }
        ]
    }
}

