var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

var srcFiles = ['app/*.js',
                     "common/*/*.js",
                     "common/*.js"];

//

gulp.task('lint', function () {
    return gulp.src(srcFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('concat', function () {
    return gulp.src(srcFiles)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task("default", ['lint', 'concat']);
