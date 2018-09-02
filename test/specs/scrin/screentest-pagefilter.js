import base64Img from 'base64-img';

describe('smoke screenshot test', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
    });

    it('take screenshot', () => {
        // base64Img.base64('snapshot/snapshot.png', function(err, data) {
        // ctx.originalScreenshot = data;
        ctx.originalScreenshot = 'snapshot/snapshot.png';
    });

    it('take second screenshot', () => {
        browser.waitForVisible('div:nth-child(2) > img');
        ctx.newScreenshot = browser.screenshot().value;
    });

    it('compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
    
        // expect(distance).to.be.above(0);
        expect(distance).to.be.below(0.1);
      });
});
