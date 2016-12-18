var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', ['watch-ts-files']);

gulp.task('watch-ts-files', function() {
   gulp.watch('*.ts', ['do-compile']);
});

gulp.task('do-compile', function() {
   exec('tsc **.ts', function (err, stdout, stderr) {
       console.log(stdout);
       console.log(stderr);
     });
});
