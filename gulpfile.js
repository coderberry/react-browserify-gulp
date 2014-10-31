var browserify = require('browserify')
  , gulp       = require('gulp')
  , source     = require("vinyl-source-stream")
  , reactify   = require('reactify');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('src/routes.js');
  return b.bundle()
    .pipe(source('routes.js'))
    .pipe(gulp.dest('./dist'));
});