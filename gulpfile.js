const gulp = require('gulp')
const less = require('gulp-less')

function compilarLESS(){
    return gulp.src('./src/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('./build/styles/main.css'))
}

exports.default = function(){
    gulp.watch('./src/styles/main.less', {ignoreInitial: false}, gulp.series(compilarLESS))
}