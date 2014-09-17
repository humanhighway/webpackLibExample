var gulp = require('gulp'),
    gulpLiveScript = require('gulp-livescript'),
    gutil = require('gulp-util'),
    gulpWebpack = require('gulp-webpack');

var deployPath = "common";

// compile ls to js
gulp.task('livescript', function() {
    return gulp.src('./ls/**/*.ls')
        .pipe(gulpLiveScript({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('./js'));
});

// for developer test and compile
gulp.task('default', ['webpack-app-build', 'webpack-lib-build'], function(){
});

gulp.task('webpack-lib-build', ['livescript'], function() {
    gulp.src("./js/lib.js")
        .pipe(gulpWebpack(require('./webpack.config.js')))
        .pipe(gulp.dest("./js/common"));
});

gulp.task('webpack-app-build', ['livescript'], function() {
    gulp.src("./js/app.js")
        .pipe(gulpWebpack(require('./webpack-app.config.js')))
        .pipe(gulp.dest("./js"));
});
