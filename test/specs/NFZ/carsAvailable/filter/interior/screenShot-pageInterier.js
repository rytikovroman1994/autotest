describe('test screenShot page interier', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter(); 
        // переходим на страницу интерьер 
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
    });

    it('take screenshot', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/interier.png';
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
