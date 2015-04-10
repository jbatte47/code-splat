"use strict";

// Required node modules
var loadTasks = require("load-grunt-tasks");

// Required files
var filesets = require("./lib/grunt/filesets.json");

module.exports = function (grunt) {
  // Load grunt plugins
  loadTasks(grunt);

  grunt.initConfig({
    "jscs": require("./lib/grunt/jscs")(filesets),
    "jshint": require("./lib/grunt/jshint")(filesets),
    "mochaTest": require("./lib/grunt/mochaTest")(filesets),
    "pkg": grunt.file.readJSON("package.json"),
    "watch": require("./lib/grunt/watch")(filesets)
  });

  grunt.registerTask("lint", "Run JSHint and JSCS", [
    "jshint:all",
    "jscs:all"
  ]);

  grunt.registerTask("test", "Run tests", ["mochaTest"]);
};
