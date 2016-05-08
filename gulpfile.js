
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// More Plugins
//var browserify = require('browserify');
//var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


// Connect configure
gulp.task('connect', function() {
    connect.server();
});

gulp.task('js-watch', function() {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        startPath: "/html"
    });
});

// launch Browsersync
gulp.task('serve', function () {

     //Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath: "app/index.html",
        reloadDebounce: 3000
    });

    gulp.watch('app/*.js', ['js-watch']);
    gulp.watch('app/templates/**/*.js', ['js-watch']);
    gulp.watch('app/templates/**/*.html', ['js-watch']);
    gulp.watch('app/css/*.css', ['js-watch']);
    gulp.watch('app/services/*js', ['js-watch']);
    //gulp.watch('app/templates/item1/*.js', ['js-watch']);
    //gulp.watch('app/templates/item1/*.html', ['js-watch']);
    gulp.watch('app/index.html').on('change', function() {

        browserSync.reload();
    });
    //gulp.watch('scss/*.scss', ['sass']);
});
