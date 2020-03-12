var gulp = require('gulp');
var webserver = require('gulp-webserver');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var fs = require('fs');

gulp.task('webserver', function () {
    gulp.src('./build')
        .pipe(webserver({
            port: 1234,
            directoryListing: {
                enable: true,
                path: './build'
            },
            livereload: true,
            fallback: './build/index.html'
        }));
    gulp.watch('./app', gulp.parallel('webpack', 'log'));
});

gulp.task('webpack', (next) => {
    webpack(webpackConfig, () => {
        next();
    });
});

gulp.task('log', (next) => {
    fs.appendFile(`${__dirname}/log/${Date.now()}.txt`, 'do something...', next);
});

gulp.task('default', gulp.series('webpack', 'webserver'));