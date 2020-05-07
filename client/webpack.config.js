const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
          },
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            images: path.resolve(__dirname, 'images/')
        }
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve('./index.html'),
        }),
    ]
};