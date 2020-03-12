module.exports = {
    mode: 'development',
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
    },
};