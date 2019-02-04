import PkwFilter from 'Pageobjects/pkw-filter.page.js';
import reporter from 'wdio-allure-reporter';
import Jimp from 'jimp';

describe('test dynamic light', () => {
    let conditions = 'Динамический поворотный свет';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };

    // запоминаем имя браузера
    let nameBrowser;
    // выносим distance
    let distance;
    // выносим diff
    let diff;
    before(' open page light', function() {
        this.retries(5);
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
        // открываем страницу экстерьер
        PkwFilter.exterior();
        // открываем страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
    });

     // проверяем работу чекбокса "Автоматическая"
    it('Check checkboxes auto', () => {
        browser.helpers.checkCheckboxNfz(conditions, 'ПОВОРОТНЫЙ СВЕТ', 'dynamic-light');
    });

    it('Check more in detail about dynamic light', () => {
        // открываем всплывающее окно
        browser.click('.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('.avn015_content .image-container img');
        // перестраховочкая пауза
        browser.pause(2000);
        // берём скриншот с локала
        ctx.originalScreenshot = `snapshot/screenshotExterior/${nameBrowser}/dynamic.png`;
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
    });

    it('Compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    });

    afterEach(function() {
        if(this.currentTest.title === 'Compare screenshots'){
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
        }
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});