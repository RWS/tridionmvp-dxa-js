const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
 
const jssource = 'assets/**/*.js';

gulp.task('babelify', () => {
    gulp.src(jssource)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('dxajs.babel.js'))        
        .pipe(gulp.dest('build'));
});

gulp.task('buildify', ()=> {
    gulp.src(jssource)
        .pipe(concat('dxajs.js'))
        .pipe(gulp.dest('build')); 
});

gulp.task('lint', ()=> {
    gulp.src(jssource)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['babelify', 'lint'], ()=>{

});