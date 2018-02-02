/**
 *
 * This is a JavaScript module that allows us to manipulate configurations defined in `nightwatch.json`.
 *
 */

// Load environment variables
require('dotenv');

/**
 * Credit:
 * https://github.com/keystonejs/keystone-nightwatch-e2e/blob/master/nightwatch.conf.js
 */
module.exports = function (conf) {
  /**
   * Enhance "test_globals"
   * See: http://nightwatchjs.org/gettingstarted#test-globals
   */
  conf.test_settings.default.globals = Object.assign({}, conf.test_settings.default.globals, {
      waitForConditionTimeout: 10 * 1000, // 10 seconds
  });

  return conf;
}(require('./nightwatch.json'));
