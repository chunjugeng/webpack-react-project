const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');
const argv = require('yargs').argv;
const isDev = argv.mode === 'development';
const isProd = !isDev;
const entryHtml = path.resolve(__dirname, './src/index.js');
const dist = path.resolve(__dirname, './dist');
require("babel-polyfill");

const config = require('./routerConfig');
const srcRoot = fs.readdirSync(path.resolve('./src/modules'));
const htmlsPlugins = [];
const entry = Object.create(null);

function getPath(_path) {
	return path.resolve(__dirname, _path);
}

if (srcRoot.length) {
    srcRoot.forEach(srcModule=> {
        const moduleConfig = config[srcModule];
        if (moduleConfig) {
            const moduleEntry = getPath(`./src/modules/${srcModule}/${moduleConfig.entry}`);
            entry[srcModule] = [getPath('./polyfill'), moduleEntry];
            const outputDir = config[srcModule].outputDir || srcModule;
            htmlsPlugins.push(
                new HtmlWebpackPlugin({
                    inject: true,
                    hash: false,
                    filename: `${outputDir}/index.html`,
                    template: getPath(`./src/modules/${srcModule}/index.html`),
                    chunks: [srcModule],
                    minify: {
                        removeComments: isProd,
                        collapseWhitspace: isProd,
                        minifyJS: isProd
                    }
                })
            );
        }
    });
}

let webpackConfig = {
    entry,
    devtool: isDev ? 'source-map' : false ,
    output: {
        path: dist,
        publicPath: '/',
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.join(__dirname, './src'),
            },
           
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: ()=> [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 2 versions',
                                        'Firefox ESR',
                                        'not ie < 9'
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    },
                    {loader: 'sass-loader'},
                    
                ],
            },
            {
                test: /\.less$/,
                use: {
                    loader: 'less-loader',
                    options: {//自定义部分颜色
                        modifyVars: {
                            'primary-color': '#1DA57A',
                            'link-color': '#1DA57A',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                       
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|bmp|jif|svg|mp3|mp4)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ClearWebpackPlugin(dist),
        new webpack.DefinePlugin({
            __client__: true,
            
        }),
        ...htmlsPlugins,
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
};
webpackConfig.devServer = {
    disableHostCheck: true,
	contentBase: dist,
	host: '0.0.0.0',
	port: pkg.dev.port,
	hot: false,
	inline: true,
    useLocalIp: true,
    proxy: pkg.proxy
};
module.exports = webpackConfig;
