// тест скриншотом страницы руль
describe('screenshot page seating', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // переходим на страницу руль 
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.avn008_image-switcher_image');
    });

    it('take screenshot page disks', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/helm.png';
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
