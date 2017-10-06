const config = require('../config');
const gulp = require('gulp');
const watch = require('gulp-watch');
const runSequence = require('run-sequence');


gulp.task('watch', () => {
  watch(config.watch.files, () => {
    runSequence(config.watch.tasks);
  });
});
