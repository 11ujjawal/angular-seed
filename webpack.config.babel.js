import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                loader: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    devtool: 'sourcemap'
};
