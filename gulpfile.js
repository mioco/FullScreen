const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify({entries: './src/js/main.js', debug: false})
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(livereload());
});

gulp.task('reload', function(){
  gulp.src('./index.html').pipe(livereload());
})

gulp.task('connect', function() {
  connect.server({
    host:'0.0.0.0',
    root:'./',
    livereload: true,
  })
})
 
gulp.task('sass', function () {
  gulp.src('./src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
  .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./index.html', ['reload'])
  gulp.watch('./src/js/*.js', ['browserify'])
  gulp.watch('./src/sass/*.scss', ['sass'])
})
gulp.task('test',['sass', 'browserify', 'connect', 'watch', 'reload']);