'use strict'

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const browserSync = require('browser-sync').create();
const resolveUrl = require('gulp-resolve-url');
const prettify = require('gulp-jsbeautifier');
const combiner = require('stream-combiner2').obj;

// gulp.task('pug', () => {
//   return gulp
//     .src('frontend/pug/pages/*.pug')
//     .pipe($.pug())
//     .pipe(prettify())
//     .pipe(gulp.dest('public'))
//     .on('error', $.notify.onError());
// });

gulp.task('pug', () => {
  return combiner(
    gulp.src('frontend/pug/pages/*.pug'),
    $.pug(),
    prettify(),
    gulp.dest('public')
    
  ).on('error', $.notify.onError(function(err) {
    return {
      title: 'pug',
      message: err.message
    }
  }));
});

// gulp.task('styles', () => {
//   return gulp
//     .src('frontend/styles/*.scss',
//     {base: 'frontend/styles'})
//     .pipe($.sourcemaps.init())
//     .pipe($.sass().on('Styles', $.sass.logError))
//     .pipe($.autoprefixer({
//       browsers: [
//         "> 1%",
//         "last 2 versions",
//         "ie >= 11"
//       ],
//       grid: true
//     }))
//     // .pipe($.shorthand())
//     .pipe($.csso()).on('error', $.notify.onError())
//     .pipe(resolveUrl())
//     .pipe($.sourcemaps.write())
//     .pipe(gulp.dest('public'))
// });

gulp.task('styles', () => {
  return combiner(
    gulp.src('frontend/styles/*.scss'),
    $.sourcemaps.init(),
    $.sass(),
    $.autoprefixer({
      browsers: [
        "> 1%",
        "last 2 versions",
        "ie >= 11"
      ],
      grid: true
    }),
    // .pipe($.shorthand())
    $.csso(),
    resolveUrl(),
    $.sourcemaps.write(),
    gulp.dest('public/styles')
  ).on('error', $.notify.onError(function(err) {
    return {
      title: 'styles',
      message: err.message
    }
  }));
});

gulp.task('scripts', () => {
  return combiner(
    gulp.src(['frontend/scripts/components/*.js'], {base: 'frontend'}),
    $.concat('script.js'),
    $.babel({
      presets: ['@babel/env']
    }),
    gulp.dest('public/scripts')
  ).on('error', $.notify.onError(function(err) {
    return {
      title: 'scripts',
      message: err.message
    }
  }));
});

gulp.task('copy:styles:swiper', () => {
  return gulp
    .src('node_modules/swiper/dist/css/swiper.min.css', {since: gulp.lastRun('copy:styles:swiper')})
    .pipe($.newer('public/styles'))
    .pipe(gulp.dest('public/styles'));
}); 

gulp.task('copy:styles:fancybox', () => {
  return gulp
    .src('node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css', {since: gulp.lastRun('copy:styles:fancybox')})
    .pipe($.newer('public/styles'))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('copy:styles:ui', () => {
  return gulp
    .src('frontend/styles/jquery-ui.css', {since: gulp.lastRun('copy:styles:ui')})
    .pipe($.newer('public/styles'))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('copy:scripts', () => {
  return gulp
    .src('frontend/scripts/libs/**/*.*', {since: gulp.lastRun('copy:scripts')})
    .pipe($.newer('public/scripts'))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('fonts', function() {
  return gulp
    .src('frontend/assets/fonts/*.*', {since: gulp.lastRun('fonts')})
    .pipe($.newer('public/assets/fonts'))
    .pipe(gulp.dest('public/assets/fonts'))
});

gulp.task('images', function() {
  return gulp.src('frontend/assets/img/*.*', {since: gulp.lastRun('images')})
    .pipe($.newer('public/assets/img'))
    .pipe($.imagemin())
    .pipe(gulp.dest('public/assets/img'));
});

gulp.task('icons', function() {
  return gulp.src('frontend/assets/img/icons/*.*', {since: gulp.lastRun('icons')})
    .pipe($.newer('public/assets/img/icons'))
    .pipe($.imagemin())
    .pipe(gulp.dest('public/assets/img/icons'));
});

gulp.task('assets',
  gulp.parallel('icons', 'images', 'fonts', 'copy:scripts', 'copy:styles:swiper', 'copy:styles:fancybox', 'copy:styles:ui')
);

gulp.task('clean',() => {
  return del('public');
});

// gulp.task('build', gulp.series(
//   'clean',
//   gulp.parallel('scripts', 'pug', 'styles', 'assets'))
// );

gulp.task('build', gulp.series(gulp.parallel('scripts', 'pug', 'styles', 'assets'))
);

gulp.task('watch', function () {
  gulp.watch('frontend/scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('frontend/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('frontend/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'server')));