var path = require('path'),
    webpack = require('webpack');

var SRC_ENTRY = path.resolve(__dirname, 'src/modules/page_modules/entry/');

var config = {
    debug: true,
    watch: false,
    entry: {
        // 为了便于browser-sync监听，将vendor交由gulp打包
        //vendors: [
        //    'angular',
        //    'angular-route'
        //],
        bundle: [
            SRC_ENTRY + '/page.js'
        ]
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test:/\.less$/,
                loaders:['style-loader','css-loader?sourceMap','less-loader?sourceMap'],
            },
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader?sourceMap'],
            },
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader?sourceMap'],
            },
        ]
    },
    devtool: 'eval'
};

module.exports = config;