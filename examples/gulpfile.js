var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('./webpack.config.js');

gulp.task('default', function() {

  config.watch = true;

  return gulp.src('app.js')
    .pipe(webpack( config ))
    .pipe(gulp.dest(''));
});