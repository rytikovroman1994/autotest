import PkwFilter from 'Pageobjects/pkw-filter.page.js'

// тест скриншотом страницы опции
describe('screenshot page options', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // имя тестируемой страницы
    let namePage = 'option';
    before(() => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу экстерьер
        PkwFilter.exterior();
        // переходим на вкладку свет
        browser.click('.avn008_filter__second-tab[data-name="Опции"]');
        // ожидаем загрузки картинки лампы
        browser.waitForVisible('.avn008_option-check_image[data-name="Тонировка"] img');
    });


    it('Сompare screenshots 400', async () => {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotExterior/400-${namePage}.png`;
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
        ctx.originalScreenshot = `./snapshot/screenshotExterior/800-${namePage}.png`;
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
        ctx.originalScreenshot = `./snapshot/screenshotExterior/1366-${namePage}.png`;
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
