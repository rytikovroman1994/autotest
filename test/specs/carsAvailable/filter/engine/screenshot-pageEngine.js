// тест скриншотом страницы двигатель
describe('screenshot page body colors', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу двигатель
        browser.click('#react-tabs-4');
        // ожидаём загрузки последней картинки
        browser.waitForExist('div.grid_12.grid_s_4.grid_m_2 > div > div > img');
    });

    it('take screenshot page body color', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/mainFilterPages/enhine.png';
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