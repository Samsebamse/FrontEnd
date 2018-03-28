var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    },
    devServer: {
        host: 'localhost',
        port: port,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]

}