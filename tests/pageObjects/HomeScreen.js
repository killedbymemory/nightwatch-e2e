/**
 * This module represents home page.
 */

let self;

module.exports = self = {
  url() {
    return this.api.globals.public.url;
  },

  screenTransitionTimeout: 100,

  elements: {
    homeScreen: 'div[data-screen-id="home"]',
    changeLocationDialog: 'div[data-qa-id="change_location_dialog"]',
    tangerang: 'div[data-qa-id="popular_location__tangerang"]',
    jakarta: 'div[data-qa-id="popular_location__jakarta"]',
    locationBox: 'div[data-qa-id="location_box"]',
    userLocationName: 'span[data-qa-id="user_location_name"]',
    detailMovie: 'div[class="tab-content active"] div[class="u-inline-block mc__home-grid"] a'
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

      assertElementTextEquals(config) {
        if (config) {
          if (config.element && config.text) {
            this.expect.element(config.element).text.to.equal(config.text);
          } else {
            throw new Error('HomeScreen: must specify an element and text!');
          }
        } else {
          throw new Error('HomeScreen: invalid config specification!');
        }
        return this;
      }
    }
  ]
};
