const imagesQuality = 75;

function minify() {
  // PLUGINS
  const { src, dest, lastRun } = require('gulp');
  const 
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminOptipng = require('imagemin-optipng');
  // CONFIG
  const jpegConfig = {
    quality: 75
  }
  const pngConfig = {
    optimizationLevel: 5
  }

  return src('./src/assets/**/*', { since: lastRun(minify) })
    .pipe(imagemin([
        imageminMozjpeg(jpegConfig),
        imageminOptipng(pngConfig)
    ]))
    .pipe(dest('./public/assets'))
}

function convertWebp() {
  // PLUGINS
  const { src, dest, lastRun } = require('gulp');
  const 
    webp = require('gulp-webp'),
    imageminWebp = require('imagemin-webp');
  // CONFIG
  const webpConfig = {
    quality: imagesQuality
  }

  return src('./src/assets/img/*', { since: lastRun(convertWebp) })
    .pipe(webp([
      imageminWebp(webpConfig)
    ]))
    .pipe(dest('./public/assets/webp'))
}

function convertAvif() {
  // PLUGINS
  const { src, dest, lastRun } = require('gulp');
  const 
    avif = require('gulp-avif'),
    imageminAvif = require('imagemin-avif');
  // CONFIG
  const avifConfig = {
    quality: imagesQuality
  }
  return src('./src/assets/img/*', { since: lastRun(convertAvif) })
    .pipe(avif([
      imageminAvif(avifConfig)
    ]))
    .pipe(dest('./public/assets/avif'))
}

const { parallel } = require('gulp');
// This is mandatory
exports.images = parallel(minify, convertWebp, convertAvif);