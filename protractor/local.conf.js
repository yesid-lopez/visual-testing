exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/**/*.spec.js'],
    capabilities: {
      browserName: 'chrome'
    },
    onPrepare() {
        const PixDiff = require('pix-diff');
        PixDiff.loadMatchers();
        browser.pixDiff = new PixDiff(
          {
            basePath: 'test/visual/resources/screenshots',
            diffPath: 'test/visual/resources/screenshots',
            formatImageName: '{tag}-{browserName}-{width}x{height}'
          }
        );
      }
  }