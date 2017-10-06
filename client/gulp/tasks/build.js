const config = require('../config');
const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('build', () => {
  gulp.src(config.jssource)
    .pipe(concat(config.build.filename))
    .pipe(gulp.dest(config.jsdest));
});
