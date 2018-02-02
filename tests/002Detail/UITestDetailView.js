module.exports = {
  before(browser) {
    const MovieApp = browser.page.MovieApp();
    MovieApp.gotoHomeScreen();

    // pick location
    const HomeScreen = browser.page.HomeScreen();
    HomeScreen.waitForElementVisible('@jakarta', 5000).click('@jakarta');

    // pick one available movie
    HomeScreen.click('@detailMovie')
  },

  after(browser) {
    browser.end();
  },

  'Detail page should has movie info component': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.assertElementIsVisible({ element: '@info' });
  },

  'User can click movie trailer and close it': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.assertElementIsNotPresent({ element: '@trailerModal' });
    DetailScreen.click('@trailerUrl');
    DetailScreen.assertElementIsVisible({ element: '@trailerModal' });
    browser.keys(browser.Keys.ESCAPE);
    DetailScreen.assertElementIsNotPresent({ element: '@trailerModal' });
  },

  'User can change schedule date': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.assertElementIsVisible({ element: '@scheduleActiveButton' });
    DetailScreen.assertElementIsVisible({ element: '@scheduleContent' });
    DetailScreen.click('@scheduleButton');
    DetailScreen.assertElementIsVisible({ element: '@scheduleContent' });
  },

  'User can filter by movie format': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.click('@filterFormatButton');
    DetailScreen.assertElementIsNotPresent({ element: '@filterTagList' });
    DetailScreen.click('@filterFormatList');
    DetailScreen.assertElementIsVisible({ element: '@filterTagList' });
    DetailScreen.click('@filterFormatList');
  },

  'User can filter by cinema chain': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.click('@filterChainButton');
    browser.pause(1000);
    DetailScreen.assertElementIsNotPresent({ element: '@searchChainName' });
    DetailScreen.click('@filterChainSingle');
    DetailScreen.assertElementIsVisible({ element: '@searchChainName' });
    DetailScreen.click('@filterChainAll');
  },

  'User can filter by time range': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.click('@filterTimeButton');
    browser.pause(1000);
    DetailScreen.assertElementIsNotPresent({ element: '@filterTagList' });
    DetailScreen.click('@filterTimeList');
    DetailScreen.assertElementIsVisible({ element: '@filterTagList' });
    DetailScreen.click('@filterTimeList');
  },

  'User can change their location': function (browser) {
    const DetailScreen = browser.page.DetailScreen();
    DetailScreen.assertElementIsVisible({ element: '@locationBox' });
    DetailScreen.click('@locationBox');
    DetailScreen.assertElementIsVisible({ element: '@changeLocationDialog' });
    DetailScreen.assertElementIsVisible({ element: '@tangerang' });
    DetailScreen.click('@tangerang');
    DetailScreen.assertElementTextEquals({ element: '@locationBox', text: 'Tangerang' });
  }
};
