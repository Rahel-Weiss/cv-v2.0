"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

gulp.task("sass", function() {
  return gulp
    .src("assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("css", function() {
  return gulp
    .src("build/css/*.css")
    .pipe(
      uglifycss({
        maxLineLen: 80,
        uglyComments: true
      })
    )
    .pipe(gulp.dest("build"));
});

// TO DO: CONCAT js
gulp.task("script", function() {
  return gulp
    .src("assets/js/*.js")
    .pipe(concat("script.min.js"))
    .pipe(gulp.dest("build"));
});

// Compile and automatically prefix stylesheets
// gulp.task("styles", () => {
//   const AUTOPREFIXER_BROWSERS = [
//     "ie >= 10",
//     "ie_mob >= 10",
//     "ff >= 30",
//     "chrome >= 34",
//     "safari >= 7",
//     "opera >= 23",
//     "ios >= 7",
//     "android >= 4.4",
//     "bb >= 10"
//   ];
// });

gulp.task("style-sheets", gulp.series("sass", "css"));

gulp.task("watch", function() {
  gulp.watch("assets/scss/*.scss", ["sass"]);
  gulp.watch("build/*.css", ["css"]);
});

const build = gulp.series("style-sheets", "script");

// Run all the tasks
gulp.task("default", function() {
  gulp.watch("assets/scss/*.scss", gulp.series("style-sheets"));
  // gulp.watch("build/*.css", gulp.series("css"));
  gulp.watch("assets/js/*.js", gulp.series("script"));
});

gulp.task("build", build);
