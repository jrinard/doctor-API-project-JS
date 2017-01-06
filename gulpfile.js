//Packages//
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util'); // environmental variable for specifying production of development
var buildProduction = utilities.env.production; //tells what kind of environment we are using. part of gulp-util
var del = require('del'); // clean tasks
var jshint = require('gulp-jshint');//Js hint
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var lib = require('bower-files')({ //required for bootstrap
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

//Debugger
gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Concatenate files together and place in temp folder
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

// Browserfy makes files ready for the browser. Runs concat first then places in build/js folder
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

// Minify compresses scripts into single line and puts in build folder
gulp.task("minifyScripts", ["jsBrowserify"], function() {
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

// Tells gulp to get all the js files that bower downloaded, see lib variable and the js files defined there, concat, uglify, then place them in the build/js folder where the html cna point to them.
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// Do the same thing as above with CSS
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

// Bower to run js and css above at the same time.
gulp.task('bower', ['bowerJS', 'bowerCSS']);

// Clean temporary files to avoid bugs
gulp.task("clean", function() {
  return del(['build', 'tmp']);
});

gulp.task('build', ['clean'], function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
    gulp.start('bower');
    gulp.start('cssBuild');
});

// Launch Server after building files
gulp.task('serve', ['build'], function() { //auto server sync
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
// Watching from the moment the server is launched
  gulp.watch(['js/*.js'], ['jsBuild']); // If js file changes then jsBuild
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);
  gulp.watch(["scss/*.scss"], ['cssBuild']);
});

// Subtask chain runs whenever watch is triggered above
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

//Subtask chain
gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});

//Subtask chain
gulp.task('htmlBuild', function() {
  browserSync.reload();
});

//Sass
gulp.task('cssBuild', function() {
  return gulp.src(['scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});
