const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'Frontend/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name][contenthash:8].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|svg|png|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'CookBuddies',
            filename: 'Frontend/index.html',
            template: 'Frontend/index.html',
        })
    ]

}