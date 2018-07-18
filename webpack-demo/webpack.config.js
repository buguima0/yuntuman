const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name]-[hash].js',
    },
    module: {
        rules: [{
                test: /\.html/,
                loader: 'html-loader'
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }

            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        compress: true,
        // hotOnly:true,
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}
console.log(process.env.NODE_ENV)
module.exports=config
