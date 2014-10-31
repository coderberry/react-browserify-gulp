var browserify    = require('browserify')
  , gulp          = require('gulp')
  , gutil         = require('gulp-util')
  , rev           = require('gulp-rev')
  , clean         = require('gulp-clean')
  , source        = require('vinyl-source-stream')
  , reactify      = require('reactify')
  , less          = require('gulp-less')
  , path          = require('path')
  , sourcemaps    = require('gulp-sourcemaps')
  , minifyCSS     = require('gulp-minify-css')
  , tiny_lr       = require('tiny-lr')
  , express       = require('express');


/***************** Configs *****************/

var httpPort = 4000;

var paths = {
  css:    [ 'src/styles/main.less' ],
  app_js: [ './src/routes.js' ],
  js:     [ 'src/**/*.js' ],

  // paths to files in bower_components that should be copied to dist/assets/vendor
  vendor: [
    'es5-shim/es5-sham.js',
    'es5-shim/es5-shim.js'
  ]
};

/***************** Tasks *****************/

gulp.task('clean', function() {
  return gulp.src('dist', { read: false })
             .pipe(clean());
});

gulp.task('css', function() {
  return gulp.src(paths.css)
             .pipe(gulp.env.production ? gutil.noop() : sourcemaps.init())
             .pipe(less().on('error', gutil.log))
             .pipe(gulp.env.production ? gutil.noop() : sourcemaps.write('./maps'))
             .pipe(gulp.env.production ? minifyCSS() : gutil.noop())
             .pipe(gulp.env.production ? rev() : gutil.noop())
             .pipe(gulp.dest('dist/assets'));
});

// Some JS and CSS files we want to grab from Bower and put them in a dist/assets/vendor directory
// For example, the es5-sham.js is loaded in the HTML only for IE via a conditional comment.
gulp.task('vendor', function() {
  var _paths = paths.vendor.map(function(p) {
    return path.resolve("./bower_components", p);
  });
  return gulp.src(_paths)
             .pipe(gulp.dest('dist/assets/vendor'));
});

// Just copy over remaining assets to dist. Exclude the styles and scripts as we process those elsewhere
gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/elements', '!src/elements/**/*', '!src/styles', '!src/styles/**/*', '!src/*.js'])
             .pipe(gulp.dest('dist'));
});

// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function() {
  // Browserify/bundle the JS.
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('dev', ['build'], function() {
  var servers;
  servers = createServers(httpPort, 35729);

  // When /src changes, fire off a rebuild
  gulp.watch(['./src/**/*'], function(evt) {
    return gulp.run('build');
  });

  // When /dist changes, tell the browser to reload
  return gulp.watch(['./dist/**/*'], function(evt) {
    gutil.log(gutil.colors.cyan(evt.path), 'changed');
    return servers.lr.changed({
      body: {
        files: [evt.path]
      }
    });
  });
});

gulp.task('build', ['js', 'css', 'copy', 'vendor', 'js']);

gulp.task('default', ['build'], function() {
  // Give first-time users a little help
  return setTimeout(function() {
    gutil.log("**********************************************");
    gutil.log("* gulp              (development build)");
    gutil.log("* gulp clean        (rm /dist)");
    gutil.log("* gulp --production (production build)");
    gutil.log("* gulp dev          (build and run dev server)");
    gutil.log("* gulp test         (run tests)");
    return gutil.log("**********************************************");
  }, 3000);
});

/***************** Helpers *****************/

// Create both http server and livereload server
createServers = function(port, lrport) {
  var app, lr;
  lr = tiny_lr();
  lr.listen(lrport, function() {
    return gutil.log("LiveReload listening on", lrport);
  });
  app = express();
  app.use(express["static"](path.resolve("./dist")));
  app.listen(port, function() {
    return gutil.log("HTTP server listening on", port);
  });
  return {
    lr: lr,
    app: app
  };
};



