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
            // 指定檔案的位置產生 html 文件
            filename: __dirname + '/index.html',
            // 指定 html 使用的樣板
            template: __dirname + '/app/index.html',
        }),
    ],
};