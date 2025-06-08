import { series, task } from "gulp";
import connect from "gulp-connect";

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

task("default", series("connect"));
