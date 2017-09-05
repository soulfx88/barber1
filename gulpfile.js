const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const gutil = require('gulp-util');



// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/sass/**/*.scss'])
        .on('error', handleError)
        .pipe(sass())
        .on('error', handleError)
        .pipe(gulp.dest("src/css"))
        .on('error', handleError)
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/sass/**/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);

function handleError(err) {
    //log('Error (' + error.plugin + '): ' + error.message);
    log(err.toString());
    this.emit('end');
}

function log(msg) {
    gutil.log(gutil.colors.red(msg));
}
