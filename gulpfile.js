//Required Gulp Plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	compass = require('gulp-compass');

//Variable Declorations
var sassSources,
	coffeeSources,
	jsSources;


//File src's
coffeeSources =['components/coffee/*.coffee'];
sassSources = ['components/sass/style.scss'];
jsSources = ['components/scripts/*.js'];

//Gulp Tasks
gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/srcipts'))
});

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
