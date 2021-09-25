function scripts() {
    const { src, dest } = require('gulp');
    const 
        plumber = require('gulp-plumber'),
        concat = require('gulp-concat'),
        terser = require('gulp-terser');
    return src([
        // YOU CAN ADD MORE PATHS
        './src/scripts/index.js'
    ], { sourcemaps: true })
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(plumber.stop())
    .pipe(dest('./public/scripts', { sourcemaps: '.' }))
}

// This is mandatory
exports.scripts = scripts;