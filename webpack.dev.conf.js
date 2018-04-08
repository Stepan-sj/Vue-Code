'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

let webpackConfig = {
    context: path.resolve(__dirname, './test'),
    entry: {
        app: './App.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('test'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    devServer: {
        port: 8800,
        open: false
    }
}

module.exports = webpackConfig

