"use strict";

// Required node modules
var stylish = require("jshint-stylish");

/**
 * Provides the configuration object used in the grunt-jshint task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    options: {
      jshintrc: true,
      reporter: stylish
    },
    all: filesets.all
  };
};
