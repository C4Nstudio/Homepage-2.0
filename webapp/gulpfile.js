var gulp = require('gulp');

gulp.task('default', function() {
  // tasks
  gulp.src('public/javascripts/index.js')
    //.pipe(minify())
    .pipe(gulp.dest('dist'));
});
