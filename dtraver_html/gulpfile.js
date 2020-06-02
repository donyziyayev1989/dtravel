var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var wait = require('gulp-wait');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
         .pipe(wait(100))
         .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
         .pipe(autoprefixer({
            browsers: ['last 50 versions'],
            cascade: false
          }))
         .pipe(gulp.dest('css')) 
});


gulp.task('browserSync', function() {
    browserSync.init(["css/*.css", "js/*.js", "*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);


