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
        base64Img.base64('snapshot/snapshot.png', function(err, data) {
        ctx.originalScreenshot = data;
        // ctx.originalScreenshot = browser.uploadFile('snapshot/snapshot.png').value;
        console.log(ctx.originalScreenshot);
        });
    });

    it('take second screenshot', () => {
        ctx.newScreenshot = browser.screenshot().value;
    });

    it('compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
    
        expect(distance).to.be.above(0.01);
      });
});
