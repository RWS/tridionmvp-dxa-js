const config = require('../config');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');

gulp.task('lint', () => {
  function onError(error) {
    const beepTimes = 4;
    gutil.log(error);
    for (let i = 0; i < beepTimes; i++) {
      gutil.beep();
    }
    this.emit('end');
  }

  gulp.src(config.jssource)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', onError);
});
