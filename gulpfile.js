const gulp = require('gulp');
const sass = require('gulp-sass');

// Compile Sass
gulp.task('sass',function(){
  gulp.src('src/sass/*.scss')
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest('dist/css'));
});


// Default
gulp.task('default',['sass']);

