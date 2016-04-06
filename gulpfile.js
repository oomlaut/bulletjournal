var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('learning', function(){
    console.log(arguments);
    
});

gulp.task('default', function(){
});

gulp.task('heroku:prod', ['default']);
