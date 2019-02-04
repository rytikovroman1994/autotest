import PkwFilter from 'Pageobjects/pkw-filter.page.js';
import reporter from 'wdio-allure-reporter';
import Jimp from 'jimp';

describe('screenshot page multimedia', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // имя тестируемой страницы
    let namePage = 'multimedia';
    // запоминаем имя браузера
    let nameBrowser;
    // выносим distance
    let distance;
    // выносим diff
    let diff;
    before(function() {
        this.retries(5);
        browser.helpers.openSite();
        // переходим на страницу интерьер
        PkwFilter.interior();
        // переходим на страницу мультимедиа 
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки диагональ экрана
        browser.waitForVisible('.multimedia img');
        browser.waitForVisible('.avn008_option-check_image[data-name="Беспроводная зарядка"]');
        // страховочная пауза
        browser.pause(2000);
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });

    it('Сompare screenshots 400', async function() {
        this.retries(2);
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotInterior/${nameBrowser}/400-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    });

    it('Сompare screenshots 800', async function() {
        this.retries(2);
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotInterior/${nameBrowser}/800-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    });

    it('Сompare screenshots 1366', async function() {
        this.retries(3);
        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/screenshotInterior/${nameBrowser}/1366-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    });

    afterEach(function() {
        if(diff.percent > 0.04 || distance > 0.07) {
            browser.call(()=> {
                return new Promise((resolve)=>{
                    diff.image.getBuffer(Jimp.AUTO, (err, res) => {
                    resolve(res);
                    });
                })
                .then((res)=>reporter.createAttachment("difference", Buffer.from(res, "base64"), 'image/png'));
            });
        // проверяем допустипость отличия в пикселях
        expect(diff.percent).to.be.below(0.04);
        // проверем допустимость отличия в растоянии
        expect(distance).to.be.below(0.07);
        }
    });
});
