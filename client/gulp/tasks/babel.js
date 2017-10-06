const config = require('../config');
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('babelify', () => {
  gulp.src(config.jssource)
    .pipe(babel(config.babel.options))
    .pipe(concat(config.babel))
    .pipe(gulp.dest('build'));
});
