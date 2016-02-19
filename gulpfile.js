//Required Gulp Plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass');

//Variable Declorations
var sassSources,
	coffeeSources,
	jsSources;


//File src's
coffeeSources =['components/coffee/*.coffee'];
sassSources = ['components/sass/style.scss'];
jsSources = [
	'components/scripts/main.js',
	'components/scripts/customizer.js',
	'components/scripts/navigation.js',
	'components/scripts/skip-link-focus-fix.js'
];

//Gulp Tasks
gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
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

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('main.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});