var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var notify = require('gulp-notify');
var stylus = require('gulp-stylus');
var nib = require('nib');
var jest = require('gulp-jest');


// Rerun the task when a file changes
gulp.task('watch', function () {

  var bundler = watchify(browserify('./js/app.js', {cache: {}, packageCache: {}, fullPaths: true, debug: true }));

  bundler.on('update', rebundle);
  bundler.on('log', function(msg) {
    gutil.log(msg);
  });

  function rebundle() {
    gutil.log('Browserify rebundling...');

    return bundler.bundle()
      .on('error', handleError)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./js'))
      .pipe(connect.reload());
  }

  return rebundle();
});

function handleError() {
  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  this.emit('end');
}

gulp.task('default', ['watch']);
