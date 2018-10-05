// тест скриншотом страницы мультимедиа
describe('screenshot page comfort', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем появление последней картинки
        browser.waitForVisible('.avn008_comfort div:nth-child(7) img');
    });

    it('take screenshot page comfort', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/mainFilterPages/option.png';
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
