// тест скриншотом страницы диски
describe('screenshot page body disks', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу диски
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на вкладку диски
        browser.click('.avn008_filter__second-tab[data-name="Диски"]');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image > img');
    });

    it('take screenshot page disks', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/disks.png';
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
