const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filname: 'bundle.js'
    },
    resolve: {
        extencions: ['.js', 'jsx'],
    },
    module:{
        rules: [
            {
                test: /\.(ja | jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filname: './index.html'
        })
    ]
}