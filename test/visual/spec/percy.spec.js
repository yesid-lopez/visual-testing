const PixDiff = require('pix-diff');
const { percySnapshot } = require('@percy/protractor')

describe('Given a angularjs homepage', () => {
    beforeAll(async () => {
        await browser.get('https://angularjs.org');
        browser.sleep(10000);
    });
    describe('when the home page is loaded', () => {
        it('then it should not change', async () => {
            await percySnapshot('home-page')
        });
    });
});
