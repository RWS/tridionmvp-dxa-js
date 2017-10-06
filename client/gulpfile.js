const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const watch = require('gulp-watch');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');

const jssource = 'assets/**/*.js';

gulp.task('babelify', () => {
  gulp.src(jssource)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('dxajs.babel.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('buildify', () => {
  gulp.src(jssource)
    .pipe(concat('dxajs.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('lint', () => {
  function onError(error) {
    const beepTimes = 4;
    gutil.log(error);
    for (let i = 0; i < beepTimes; i++) {
      gutil.beep();
    }
    this.emit('end');
  }

  gulp.src(jssource)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', onError);
});

gulp.task('watch', () => {
  watch(jssource, () => {
    runSequence('lint', 'buildify');
  });
});

gulp.task('default', ['babelify', 'lint'], () => {

});