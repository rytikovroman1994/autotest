describe('test screenShot page color seet', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter();
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // переключаемся на интерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(1)');
        // ждём пока перерендерится картинка
        browser.pause(3000);
    });

    it('take screenshot page body color', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/color-seet.png';
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
