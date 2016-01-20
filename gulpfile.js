var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

var paths = {
  js: {
    src: './src/js/peach.js',
    dest: './public/js',
    vendor: {
      src: ['./src/js/vendor/zepto.min.js',
        './src/js/vendor/nunjucks.min.js',
        './src/js/vendor/moment.min.js',
        './src/js/vendor/velocity.min.js',
        './src/js/vendor/velocity.ui.min.js'
      ]
    }
  },
  views: {
    src: './src/views/*.html',
    dest: './public/views'
  },
  styles: {
    src: './src/css/peach.css',
    dest: './public/css'
  },
  index: {
    src: './src/index.html',
    dest: './public'
  }
};

gulp.task('vendor-js', function () {
  return gulp.src(paths.js.vendor.src)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('js', function () {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest));
});

gulp.task('styles', function () {
  return gulp.src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('index', function () {
  return gulp.src(paths.index.src)
    .pipe(gulp.dest(paths.index.dest));
});

gulp.task('views', function () {
  return gulp.src(paths.views.src)
    .pipe(nunjucks.precompile())
    .pipe(concat('compiled.js'))
    .pipe(gulp.dest(paths.views.dest));
});

gulp.task('favicons', function () {
  return gulp.src('./src/favicons/*')
    .pipe(gulp.dest('./public'));
});

gulp.task('images', function () {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img'));
});

gulp.task('default', function () {
  gulp.start('index');
  gulp.start('vendor-js');
  gulp.start('js');
  gulp.start('styles');
  gulp.start('views');
  gulp.start('images');
  gulp.start('favicons');
});
