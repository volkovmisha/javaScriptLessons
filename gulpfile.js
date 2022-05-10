var gulp = require('gulp')
var browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass')),
    cssmin = require('gulp-cssnano'),
    prefix = require('gulp-autoprefixer');

var prefixerOptions = {
    browsers: ['last 2 versions']
};

gulp.task('sass', function(done) {
    gulp.src("sass/*.sass")

        .pipe(prefix(prefixerOptions))
        .pipe(cssmin())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("sass/*.sass", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});
gulp.task('default', gulp.series('sass', 'serve'));

//autoprefixer
//minify