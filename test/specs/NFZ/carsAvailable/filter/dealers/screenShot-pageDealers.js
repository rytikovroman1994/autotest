describe('test screenShot page dealers', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter(); 
        // переходим на страницу Дилеры 
        browser.click('.avn008_filter__tab[data-name="Дилеры"]');
    });

    it('take screenshot', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/dealers.png';
    });

    it('do second screenshot', () => {
        // делаем текущий скриншот
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
