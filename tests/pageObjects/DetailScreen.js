/**
 * This module represents home page.
 */

let self;

module.exports = self = {
  screenTransitionTimeout: 100,

  elements: {
    info: 'div[class="mv__details-movie-info-intro"]',
    trailerUrl: 'div[class="u-center mv__details-trailer-overlay__content"]',
    trailerModal: 'div[class="mv__video-modal"]',
    scheduleActiveButton: 'button[class="u-center u-inline-block u-align-middle mv__avt-card-day-list active"]',
    scheduleButton: 'button.mv__avt-card-day-list:not(.active)',
    scheduleContent: 'div.mv__avt-card-content',
    filterFormatButton: 'button[data-qa-id="filter-by-format"]',
    filterFormatList: 'ul[data-qa-id="filter-by-format"] li',
    filterTagList: 'div[class="u-clearfix mv__avt-card-filter-tag"]',
    filterChainButton: 'button[data-qa-id="filter-by-chain"]',
    filterChainAll: 'ul[data-qa-id="filter-by-chain"] li:nth-child(1)',
    filterChainSingle: 'ul[data-qa-id="filter-by-chain"] li:nth-child(2)',
    searchChainName: 'div[class="mv__search-input"] span[class="mv__search-input--tag"]',
    filterTimeButton: 'button[data-qa-id="filter-by-time"]',
    filterTimeList: 'ul[data-qa-id="filter-by-time"] li',
    locationBox: 'div[data-qa-id="location_box"]',
    changeLocationDialog: 'div[data-qa-id="change_location_dialog"]',
    tangerang: 'div[data-qa-id="popular_location__tangerang"]'
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
      },

      assertElementIsNotPresent(config) {
        if (config) {
          if (config.element) {
            this.expect.element(config.element).to.not.be.present;
          } else {
            throw new Error('DetailView: element should be not exist!');
          }
        } else {
          throw new Error('DetailView: invalid config specification!');
        }
        return this;
      }

    }
  ]
};
