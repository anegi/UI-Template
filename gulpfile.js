/**
 * 
 */


var gulp=require('gulp');

var sass=require('gulp-sass');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var htmlmin = require('gulp-htmlmin');

var flatten = require('gulp-flatten');

gulp.task('scripts',function(){
	return gulp.src(['src/main/app/**/*.js'])
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('src/main/webapp/script'));
});


gulp.task('templates',function(){
	return gulp.src('src/main/app/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(flatten())
	.pipe(gulp.dest('src/main/webapp/template'));
});


gulp.task('sass',function(){
	return gulp.src('src/main/app/sass/*')
	.pipe(sass())
	.pipe(gulp.dest('src/main/webapp/css'));
});

gulp.task('run',['scripts','sass','templates']);

gulp.task('default',['run']);