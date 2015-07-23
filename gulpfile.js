//gulp
var gulp = require('gulp');

//plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var reload = require('gulp-livereload');
var minifyImg = require('gulp-imagemin');
var minjpeg = require('imagemin-jpegtran');


//tasks

gulp.task('lint', function() {
  gulp.src(['.app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe(clean({force: true}));
});

gulp.task('dist-minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src([
    './app/**/bootstrap.min.css',
    './app/css/*.css'])
    .pipe(concat('bundle.min.css'))
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('minify-js', function() {
  gulp.src([
    './app/**/**/**/jquery.min.js',
    './app/**/bootstrap.min.js',
    './app/**/angular.min.js',
    './app/**/angular-route.min.js',
    './app/**/banner.js',
    './app/**/main.js',
    '!./app/**/config.js',
    '!./app/bower_components/**'])
    .pipe(concat('bundle.min.js'))
    // .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./app/js/'))
});

gulp.task('dist-minify-js', function() {
  gulp.src([
    './app/**/jquery.min.js',
    './app/**/angular.min.js',
    './app/**/angular-route.min.js',
    './app/**/banner.js',
    './app/**/main.js',
    '!./app/**/config.js',
    '!./app/bower_components/**'])
    .pipe(concat('bundle.min.js'))
    // .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy-bower-components', function() {
  gulp.src('./app/js/vendor/**')
    .pipe(gulp.dest('./dist/js/vendor/'));
});

gulp.task('copy-html-files', function() {
  gulp.src('./app/**/*.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('copy-images', function() {
  gulp.src('./app/img/*.*')
  // .pipe(minifyImg({
  //   progressive:true,
  //   svgoPlugins:[{removeViewBox: false}],
  //   use: [minjpeg()]
  // }))
  .pipe(gulp.dest('dist/img/'));
})

gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('connectDist', function() {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});

//default task
gulp.task('default',
  ['lint','minify-js', 'connect'], function() {
    reload();
    gulp.watch(['./app/**/*.html','./app/js/*.js','!./app/js/vendor/*.*','./app/css/*.css']);
  }
);

//build task
gulp.task('build',
  ['lint','dist-minify-css','dist-minify-js','copy-html-files','copy-images','connectDist']
);
