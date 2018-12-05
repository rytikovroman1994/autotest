describe('test screenShot page color door', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(() => {
        browser.helpers.openFilter();
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_image-switcher_image');
        // изменение програчности фильтра
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
    });

    it('take screenshot page body color', () => {
        // берём скриншот с локала
        ctx.originalScreenshot = './snapshot/nfzMainFilterPages/color-door.png';
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
            diff.image.write(`./test/reports/allure-results/color.png`);
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.01);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
      });
});
