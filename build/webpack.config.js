const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "dist/index": path.resolve(__dirname, '../src/index.js')
    }, //入口文件
    output: {
        path: path.resolve(__dirname, '../'), 
        filename: '[name].js',
        library: '@arni/layernative',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                loaders: [
                    'vue-loader'
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    //插件
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new VueLoaderPlugin()
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /\/node_modules/,
            })
        ],
    }
};
