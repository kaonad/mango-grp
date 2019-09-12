const { src, dest, watch } = require("gulp");
const settings = require("./settings");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssvars = require("postcss-simple-vars");
const cssImport = require("postcss-import");
const rgba = require("postcss-hexrgba");
const mixins = require("postcss-mixins");
const colorFunctions = require("postcss-color-function");
const nested = require("postcss-nested");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function css() {
  return src("./scss/*.scss")
    .pipe(
      postcss([cssImport, mixins, cssvars, nested, rgba, colorFunctions]).on(
        "error",
        error => console.log(error.toString())
      )
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer())
    .pipe(dest("./"))
    .on("error", error => console.log(error.toString()))
    .pipe(browserSync.stream());
}

function js() {
  return src("./js/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(concat("build.min.js"))
    .pipe(dest("./js/min"));
}

function browser() {
  browserSync.init({
    proxy: settings.urlToPreview,
    files: ["./**/*"]
  });

  watch("./scss/**/*.scss", css);
  watch("./js/*.js", js).on("change", browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.default = browser;
