"use strict";

/**
 * Provides the configuration object used in the grunt-watch task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    lint: {
      files: filesets.all,
      tasks: "lint"
    },
    tests: {
      files: filesets.watchFiles,
      tasks: "mochaTest:test"
    }
  };
};
