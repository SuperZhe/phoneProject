var Orchestrator = require('orchestrator');
var orchestrator = new Orchestrator();
var gulp = require("gulp"),
    connect = require("gulp-connect");
gulp.task("default", ['localhost']);
gulp.task('localhost', function() {
    connect.server({
        root: './www/',
        port: 8090
    });
});
