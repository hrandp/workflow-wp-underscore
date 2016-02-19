//Required Gulp Plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass');

//Variable Declorations
var sassSources;


//File src
sassSources = ['components/sass/style.scss'];

//Gulp Tasks
gulp.task('compass', function(){
	gulp.src(sassSources)
			.pipe(compass({
				sass: 'components/sass',
				images: 'builds/development/images',
				style: 'expanded'

			}))
			.on('error', gutil.log)
			.pipe(gulp.dest('builds/development/'))

});
