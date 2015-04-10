"use strict";

/**
 * Provides the configuration object used in the grunt-jscs task.
 * @param {Object} filesets - Various sets of file references.
 * @returns {Object}
 */
module.exports = function (filesets) {
  return {
    options: {
      config: ".jscsrc"
    },
    all: filesets.all
  };
};
