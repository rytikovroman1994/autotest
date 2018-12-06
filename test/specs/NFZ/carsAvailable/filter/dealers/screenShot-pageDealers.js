describe('test screenShot page dealers', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // имя тестируемой страницы
    let namePage = 'dealers';
    before(() => {
        browser.helpers.openFilter(); 
        // переходим на страницу Дилеры 
        browser.click('.avn008_filter__tab[data-name="Дилеры"]');
        // изменение програчности фильтра
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
    });

    it('Сompare screenshots 400', async () => {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/nfzMainFilterPages/400-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        const diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
        console.log(distance);
        console.log(diff.percent);
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.04 || distance > 0.07) {
            // если большое различие, то сохраняем изображение с отличием
            diff.image.write(`./test/reports/allure-results/400-${namePage}.png`);
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.04);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
    });

    it('Сompare screenshots 800', async () => {
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/nfzMainFilterPages/800-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        const diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
        console.log(distance);
        console.log(diff.percent);
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.04 || distance > 0.07) {
            // если большое различие, то сохраняем изображение с отличием
            diff.image.write(`./test/reports/allure-results/800-${namePage}.png`);
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.04);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
    });

    it('Сompare screenshots 1366', async () => {
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/nfzMainFilterPages/1366-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        const diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
        console.log(distance);
        console.log(diff.percent);
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.04 || distance > 0.07) {
            // если большое различие, то сохраняем изображение с отличием
            diff.image.write(`./test/reports/allure-results/1366-${namePage}.png`);
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.04);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.07);
        }
    });
});
