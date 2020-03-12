const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // https://github.com/jantimon/html-webpack-plugin/issues/895
    // 解決 Entrypoint undefined = ..\index.html
    stats: {
        children: false,
    },
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定 html 使用的樣板
            template: __dirname + '/app/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/, // 指定 .css 結尾的檔案用那些 loader 處理
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                loader: 'url-loader',
                options: {
                    limit: false,
                    name: '[name].[ext]',
                    publicPath: 'build/'
                },
            },
        ],
    },
};