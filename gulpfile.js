const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

function comprimirSCSSemCSS(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" })) //Compila o SASS
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/styles')) // Salva o CSS compilado no destino selecionado
}

function compilarEObfuscarJS(){
    return gulp.src('./source/script/*.js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/script'))
}

function otimizarArquivos(){
    return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(comprimirSCSSemCSS))
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(compilarEObfuscarJS))
    gulp.watch('./images/*', {ignoreInitial: false}, gulp.series(otimizarArquivos));
}