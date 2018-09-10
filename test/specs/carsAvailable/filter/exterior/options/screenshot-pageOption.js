// тест скриншотом страницы опции
describe('screenshot page options', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу экстерьер
        browser.click('#react-tabs-6');
        // переходим на вкладку опции
        browser.click('#react-tabs-18');
        // ожидаем загрузки картинки лампы
        browser.waitForVisible('div:nth-child(5) > div > div > div.avn008_option-check_image > img');
    });

    it('take screenshot page options', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/option.png';
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
