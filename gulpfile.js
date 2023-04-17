const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass-compile', function(){
    return gulp.src('./source/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/css/'))
})

gulp.task('watch', function(){
    gulp.watch('./source/sass/**/*.scss', gulp.series('sass-compile'))
})


