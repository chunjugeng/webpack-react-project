const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distServer = path.resolve(__dirname, 'dist-server');
module.exports = {
    entry: {
        prerender: path.resolve(__dirname, './prerender')
    },
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.join(__dirname, 'dist-server'),
        filename: '[name].js'
    },
    resolve: {
        extensions:['.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    env: {
                        development: {
                            plugins: [
                                [
                                    'babel-plugin-transform-require-ignore',
                                    {
                                        extensions: ['.scss', '.css', '.sass']
                                    }
                                ]
                            ]
                        }
                    }
                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(distServer),
        new webpack.DefinePlugin({
            __client__: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
};
