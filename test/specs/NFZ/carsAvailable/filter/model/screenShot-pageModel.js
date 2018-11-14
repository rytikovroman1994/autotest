describe('test screenShot page model', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter();
        // ожидаем пока загрузится последняя картинка модели
        browser.waitForVisible('div:nth-child(8) .image-container img');
    });

    it('take screenshot page body color', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/model.png';
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
