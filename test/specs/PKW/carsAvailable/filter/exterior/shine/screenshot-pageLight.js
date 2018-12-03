// тест скриншотом страницы свет
describe('screenshot page light', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openSite();
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на вкладку свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
        // ожидаем загрузки картинки лампы
        browser.waitForVisible('.push_m_3 img');
    });

    it('take screenshot page light', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/shine.png';
    });

    it('do second screenshot', () => {
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;
    });

    it('compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        const diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.01 || distance > 0.1) {
            // если большое различие, то сохраняем изображение с отличием
            diff.image.write('./test/reports/allure-results/page-shine.png');
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.01);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
      });
});
