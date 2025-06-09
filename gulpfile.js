import { task, series, src, dest, watch } from "gulp";
import connect from "gulp-connect";
import pug from "gulp-pug";
import notify from "gulp-notify";
import map from "gulp-sourcemaps";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import prefixer from "gulp-autoprefixer";
import uglify from "gulp-uglify";
import concat from "gulp-concat";

task("connect", () => {
  connect.server({
    root: "dist",
    livereload: true,
  });
});

task("jenkins-tests", () => {
  connect.server({
    port: 8000,
  });
  connect.serverClose();
});

task("html", () => {
  return (
    src("src/index.pug")
      .pipe(pug())
      .pipe(dest("dist"))
      .pipe(notify({ message: "HTML Task Is Successful", onLast: true }))
      .pipe(connect.reload()),
    src("src/pages/*.pug")
      .pipe(pug())
      .pipe(dest("dist/pages"))
      .pipe(notify({ message: "HTML Pages Task Is Sucessful", onLast: true }))
      .pipe(connect.reload())
  );
});

task("css", () => {
  return src("src/layout.scss")
    .pipe(map.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefixer("last 2 versions"))
    .pipe(map.write("."))
    .pipe(dest("dist/css"))
    .pipe(notify({ message: "CSS Task Is Successful", onLast: true }))
    .pipe(connect.reload());
});

task("js", () => {
  return src("src/js/*.js")
    .pipe(map.init())
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(map.write("."))
    .pipe(dest("dist/js"))
    .pipe(notify({ message: "JS Task Is Successful", onLast: true }))
    .pipe(connect.reload());
});

watch("src/**/*.pug", series("html"));
watch("src/**/*.scss", series("css"));
watch("src/js/*.js", series("js"));
task("default", series("connect"));
