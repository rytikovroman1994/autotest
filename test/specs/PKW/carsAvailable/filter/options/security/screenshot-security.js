// тест скриншотом страницы безопасность
describe('screenshot page security', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу безопасность
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        // ожидаем появление картинки 
        browser.waitForVisible('.avn008_safety-images_main img');
    });

    it('take screenshot page comfort', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/security.png';
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