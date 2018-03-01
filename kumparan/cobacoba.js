module.exports = {
  '@tags': ['penting-banget-cuk'],
  'User buka kumparan.com harusnya di header ada tulisan Kumparan': function (browser) {
      browser
        .url('https://kumparan.com')
        .waitForElementVisible('body', 1000)
        //.pause(2000)
        .assert.containsText('#content > div > div > div > nav > div > div > div > div.navbar-header > a > h3', 'Kumparan')
        .waitForElementVisible('#onesignal-popover-cancel-button', 10000)
        .click('#onesignal-popover-cancel-button')
        .moveTo({
          yoffset: 100
        })
        //.pause(2000)
        .moveTo({
          yoffset: 200
        })
        //.pause(2000)
        .moveTo({
          yoffset: 300
        })
        //.pause(2000)
        .moveTo({
          yoffset: 400
        })
        //.pause(2000)
        .moveTo({
          yoffset: 500
        })
        //.pause(10000)
        .moveTo({
          yoffset: 0
        })
        //.pause(10000)
        .end();
  }
};
