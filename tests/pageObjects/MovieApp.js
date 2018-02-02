/**
 * This module represents movie application in general.
 */

var self;

module.exports = self = {
  url() {
    return 'http://staging.tokopedia.com/bioskop/';
  },

  screenTransitionTimeout: 10,

  elements: {
    // Screens
    homeScreen: 'div[data-screen-id="home"]',
  },

  commands: [
    {
      /**
       * Asserts that the specified home screen element UI is visible.
       *
       * @param {Object} config The config spec.
       * @param {string} config.element The element whose UI should be visible.
       */
      assertElementIsVisible(config) {
        if (config) {
          if (config.element) {
            this.expect.element(config.element).to.be.visible;
          } else {
            throw new Error('MovieApp: must specify an element!');
          }
        } else {
          throw new Error('MovieApp: invalid config specification!');
        }
        return this;
      },

      /**
       * Asserts that the specified home screen element UI is not visible.
       *
       * @param {Object} config The config spec.
       * @param {string} config.element The element whose UI should not be visible.
       */
      assertElementIsNotVisible(config) {
        if (config) {
          if (config.element) {
            this.expect.element(config.element).to.not.be.visible;
          } else {
            throw new Error('MovieApp: must specify an element!');
          }
        } else {
          throw new Error('MovieApp: invalid config specification!');
        }
        return this;
      },

      /**
       * Waits for the home screen UI to be visible.
       *
       * @param {Object} config The config spec.
       * @param {number} config.timeout Optional timeout to wait for.
       */
      waitForHomeScreen: function(config) {
        var _config = Object.assign(
          {},
          { timeout: this.api.globals.waitForConditionTimeout },
          config
        );
        this.waitForElementVisible('@homeScreen', _config.timeout);
        this.api.pause(self.screenTransitionTimeout);
        return this;
      },

      /**
       * Navigates to the home screen.
       *
       * @param {Object} config The config spec.
       * @param {boolean} config.wait Whether to wait for the target UI.  Optional, defaults to true.
       */
      gotoHomeScreen(config) {
        const _config = Object.assign({}, { wait: true }, config);
        this.navigate();
        if (_config.wait) this.waitForHomeScreen();
        return this;
      }
    }
  ]
};
