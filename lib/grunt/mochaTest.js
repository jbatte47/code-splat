"use strict";

/**
 * Provides the configuration object used in the grunt-mocha-test task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    test: {
      options: {
        reporter: "spec",
        require: "babel/register"
      },
      src: filesets.specFiles
    }
  };
};
