var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var notify = require('gulp-notify');
var karma = require('gulp-karma');

var testFiles = [
  './test/*.js'
];

gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

// Rerun the task when a file changes
gulp.task('watch', function () {

  gulp.watch('./js/*.js', ['test']);

  var bundler = watchify(
    browserify(
      './js/neat-audio.js',
      {cache: {}, packageCache: {}, fullPaths: true, debug: true }
    )
  );

  bundler.on('update', rebundle);
  bundler.on('log', function(msg) {
    gutil.log(msg);
  });

  function rebundle() {
    gutil.log('Browserify rebundling...');

    return bundler.bundle()
      .on('error', handleError)
      .pipe(source('./bundle.js'))
      .pipe(gulp.dest('./test'));
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

gulp.task('default', ['watch', 'test']);
