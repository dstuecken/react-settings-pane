var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('./webpack.config.js');

gulp.task('default', function() {
  config.output.filename = 'ReactSettingsPane.js';
  config.watch = true;

  return gulp.src('src/index.js')
    .pipe(webpack( config ))
    .pipe(gulp.dest('dist/'));
});