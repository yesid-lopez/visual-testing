const PixDiff = require('pix-diff');

describe('Given a angularjs homepage', () => {
    beforeAll(function () {
        browser.get('https://angularjs.org');
    });
    describe('when the home page is loaded', function () {
        it('then it should not change', () => {
            browser.pixDiff.checkScreen('home-page')
                .then(result => expect(result.code).toEqual(PixDiff.RESULT_IDENTICAL));
        });
    });
    describe('when the nav bar is loaded', function () {
        it('then it should not change', () => {

            const navbarSelector = '#navbar-main div.navbar-inner>div.container';
            browser.pixDiff.checkRegion($(navbarSelector), 'navbar')
                .then(result => expect(result.code).toEqual(PixDiff.RESULT_IDENTICAL));
        });
    });
    describe('when the angular logo is loaded', function () {
        it('then it should not change', () => {

            const logo = '[role="main"] div.hero h2';
            browser.pixDiff.checkRegion($(logo), 'angular-logo')
                .then(result => expect(result.code).toEqual(PixDiff.RESULT_IDENTICAL));
        });
    });
});
