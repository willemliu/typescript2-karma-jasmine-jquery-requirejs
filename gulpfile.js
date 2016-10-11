var gulp = require('gulp');
var ts = require('gulp-typescript');
var rename = require("gulp-rename");
var del = require('del');
var rjs = require('requirejs');
var Server = require('karma').Server;

var tsProject = ts.createProject('tsconfig.json');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * RequireJS compilation.
 */
gulp.task('rjs', ['typescript'], function(cb){
  rjs.optimize({
    appDir: './build/js',
    baseUrl: '.',
    dir: 'dist/js',
    removeCombined: true,
    optimize: "uglify2",
    generateSourceMaps: true,
    preserveLicenseComments: false,
    fileExclusionRegExp: /^\.|^node_modules|Gulpfile.js|package.json|.*bat$|3rdpartybackup|uploads|.*scss$|.*eps$|.*log$/i,
    modules: [{
        name: 'main'
    }]
  }, function(buildResponse){
    // console.log('build response', buildResponse);
    cb();
  }, cb);
});

/**
 * Build TypeScript. Prepare the files for use.
 */
gulp.task('typescript', ['copy'], function() {
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(tsProject());
 
    return tsResult.js.pipe(gulp.dest('build/js'));
});

/**
 * Copy assets to dist/ and/or build/ for further processing.
 */
gulp.task('copy', ['clean'], function() {
  gulp.src('js/lib/jquery*.js')
    .pipe(rename("jquery.js"))
    .pipe(gulp.dest('build/js/'));
  gulp.src('js/lib/require.js').pipe(gulp.dest('build/js/'));
  gulp.src('html/index.html').pipe(gulp.dest('build/'));
  gulp.src('html/index.html').pipe(gulp.dest('dist/'));
});

/**
 * Clear the dist folder
 */
gulp.task('clean', function() {
  return del.sync([
    'dist/**',
    'build/**'
  ], {force: true});
});



/**
 * Default run.
 */
gulp.task('default', ['rjs']);