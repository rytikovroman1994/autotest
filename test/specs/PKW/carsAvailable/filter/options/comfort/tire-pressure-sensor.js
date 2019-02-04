import PkwFilter from 'Pageobjects/pkw-filter.page.js';
import reporter from 'wdio-allure-reporter';
import Jimp from 'jimp';

describe.skip('test tire pressure sensor', () => {
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
    before('open page options', function() {
        this.retries(3);
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(3);
        // переходим на страницу 
        PkwFilter.options();
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.avn008_option-check_image[data-name="Камера заднего вида"] img');
    });

     it('Сheck checkbox tire pressure sensor', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(7) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ДАТЧИК В ШИНАХ');
        // убираем условие
        browser.click('div:nth-child(7) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('Сheck more in detail about tire pressure sensor', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = `snapshot/screenshotOption/${nameBrowser}/pressureMeter.png`;
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('compare screenshots', async () => {
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
});