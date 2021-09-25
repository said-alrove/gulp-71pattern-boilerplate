function dev() {
  // TASKS
  const 
    { watch } = require('gulp'),
    { html } = require('./html.js'),
    { css } = require('./styles.js'),
    { images } = require('./images.js'),
    { scripts } = require('./scripts.js'),
    browserSync = require('browser-sync').create(),
    init = browserSync.init,
    reload = browserSync.reload;
  // CONFIG
  const gulpConfig = {
    delay: 1000, 
    ignoreInitial: false
  }
  // LIVE-SERVER
  init({
    server: {
      baseDir: "./public/"
    }
  });
  watch("./src/*.html", gulpConfig, html).on("change", reload);
  watch("./src/scss/**/*.scss", gulpConfig, css).on("change", reload);
  watch('./src/assets/**/*', gulpConfig, images)
  watch('./src/scripts/*.js', gulpConfig, scripts).on("change", reload);
}

const 
 { series } = require('gulp'),
 { html } = require('./html.js'),
 { css } = require('./styles.js'),
 { images } = require('./images.js'),
 { scripts } = require('./scripts');
// This is mandatory
exports.build = series(html, css, images, scripts);
exports.default = dev;
