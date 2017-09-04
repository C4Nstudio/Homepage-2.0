var gulp = require('gulp');

gulp.task('default', ['src', 'watch']);

gulp.task('watch', function() {
  gulp.watch(['./public/**/*.*'], ['src']);
});

gulp.task('src', function() {
  // tasks
  gulp.src('public/javascripts/index.js')
    //.pipe(minify())
    .pipe(gulp.dest('dist'));
});
