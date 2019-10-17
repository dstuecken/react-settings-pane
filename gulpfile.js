const gulp = require("gulp");
const webpack = require("webpack-stream");
const config = require("./webpack.config.js");

gulp.task("default", function() {
  config.output.filename = "ReactSettingsPane.js";
  config.watch = true;

  return gulp
    .src("src/index.js")
    .pipe(webpack(config))
    .pipe(gulp.dest("dist/"));
});
