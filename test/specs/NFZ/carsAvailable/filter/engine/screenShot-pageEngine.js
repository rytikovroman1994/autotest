describe('test screenShot page engine', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter();
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем пока загрузится последняя картинка
        browser.waitForVisible('.avn008_engine__card-image[data-name="Трансмиссия"]');
    });

    it('take screenshot page body color', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/engine.png';
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
