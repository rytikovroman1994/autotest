import PkwFilter from 'Pageobjects/pkw-filter.page.js'
// тест скриншотом страницы мультимедиа
describe('screenshot page winter package', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // имя тестируемой страницы
    let namePage = 'winterPackage';
    // запоминаем имя браузера
    let nameBrowser;
    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу 
        PkwFilter.options();
        // открываем страницу зимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
    });

    it('Сompare screenshots 400', async function() {
        this.retries(2);
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotOption/${nameBrowser}/400-${namePage}.png`;
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

    it('Сompare screenshots 800', async function() {
        this.retries(2);
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotOption/${nameBrowser}/800-${namePage}.png`;
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

    it('Сompare screenshots 1366', async function() {
        this.retries(2);
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotOption/${nameBrowser}/1366-${namePage}.png`;
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
