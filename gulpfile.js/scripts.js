function scripts() {
    const { src, dest } = require('gulp');
    const 
        plumber = require('gulp-plumber'),
        concat = require('gulp-concat'),
        terser = require('gulp-terser');
    return src([
        // YOU CAN ADD MORE PATHS
        './src/scripts/index.js'
    ])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(plumber.stop())
    .pipe(dest('./public/scripts'))
}

// This is mandatory
exports.scripts = scripts;