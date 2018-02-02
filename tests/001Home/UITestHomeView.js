module.exports = {
  before(browser) {
    const MovieApp = browser.page.MovieApp();
    MovieApp.gotoHomeScreen();
  },

  after(browser) {
    browser.end();
  },

  'Home page should has Change Location Dialog popped out for user very first visit': function (browser) {
    const HomeScreen = browser.page.HomeScreen();
    HomeScreen.assertElementIsVisible({ element: '@changeLocationDialog' });
    HomeScreen.assertElementTextEquals({ element: '@userLocationName', text: 'Pilih lokasi' });
  },

  'Popular location within Change Location Dialog should be clickable': function (browser) {
    const HomeScreen = browser.page.HomeScreen();
    HomeScreen.assertElementIsVisible({ element: '@tangerang' });
    HomeScreen.click('@tangerang');
    HomeScreen.assertElementTextEquals({ element: '@userLocationName', text: 'Tangerang' });
  },

  'Home page should not show Change Location Dialog when user has selected a location': function (browser) {
    browser.refresh();
    const HomeScreen = browser.page.HomeScreen();
    HomeScreen.assertElementIsNotVisible({ element: '@changeLocationDialog' });
  },

  'User can change their location': function (browser) {
    const HomeScreen = browser.page.HomeScreen();
    HomeScreen.assertElementIsVisible({ element: '@locationBox' });
    HomeScreen.click('@locationBox');
    HomeScreen.assertElementIsVisible({ element: '@changeLocationDialog' });
    HomeScreen.assertElementIsVisible({ element: '@jakarta' });
    HomeScreen.click('@jakarta');
    HomeScreen.assertElementTextEquals({ element: '@userLocationName', text: 'Jakarta' });
  }
};
