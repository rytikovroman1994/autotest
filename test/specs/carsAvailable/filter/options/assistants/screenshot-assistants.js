// тест скриншотом страницы асистенты
describe('screenshot page assistanse', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу опции
        browser.click('#react-tabs-10');
        // переходим на страницу асисистенты 
        browser.click('#react-tabs-16');
        // ожидаем загрузки картинки асистенты парковки
        browser.waitForVisible('.avn008_option__slider-card-icon');
    });

    it('take screenshot page assistanse', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/assistants.png';
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
