// тест скриншотом страницы мультимедиа
describe('screenshot page winter package', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу асисистенты 
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем загрузки картинки асистенты парковки
        browser.waitForVisible('.avn008_option__slider-card-icon');
    });

    it('take screenshot page winter package', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/winterPackage.png';
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
