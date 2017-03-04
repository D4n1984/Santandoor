var webpack = require('webpack');
var CordovaWebpackPlugin = require('cordova-webpack-plugin');

module.exports = {
    entry: ['bootstrap-loader', './app/entry.js'],
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                },
                    { loader: "jshint-loader", options: { camelcase: true, emitErrors: false, failOnHint: false } }

                ],
            },
            {
                test: /\.html$/,
                exclude: [/node_modules/],
                use:  ['underscore-template-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /.*\.(png|woff|woff2|eot|ttf|svg|gif|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            query: {
                                hash: 'sha512',
                                digest: 'hex',
                                name:'./assets/[hash].[ext]'
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                progressive: true,
                                optimizationLevel: 7,
                                interlaced: false,
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4
                                }
                            }
                        }
                    }]
            },

        ]
    },
    output: {
        path: __dirname + '/static/js',
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore',
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CordovaWebpackPlugin({
            output: 'cordova_dist',                 /* Specify the output folder */
            config: 'cordova-config.xml',   /* The source config for cordova which will be copied to the output folder as 'config.xml' */
            index: 'app/index.html', /* The source index.html which will be copied to the <output folder>/www/ folder as 'index.html' */
            disabled: false                 /* (optional) Boolean value to conditionally run the plugin */
        })

    ],
    resolve: {
        modules: [
            __dirname + '/app',
            __dirname + '/node_modules'
        ]
    },
    devServer: {
        contentBase:  __dirname + '/cordova_dist/www',
        compress: true,
        port: 9000
    }
};