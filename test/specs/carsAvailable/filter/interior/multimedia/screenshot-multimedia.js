// тест скриншотом страницы мультимедиа
describe('screenshot page multimedia', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('#react-tabs-8');
        // переходим на страницу мультимедиа 
        browser.click('#react-tabs-18');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.multimedia img');
    });

    it('take screenshot page multimedia', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/dynamic.png';
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
