import PkwFilter from 'Pageobjects/pkw-filter.page.js';
import reporter from 'wdio-allure-reporter';
import Jimp from 'jimp';

describe('test heated heated windscreen', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Подогрев лобового стекла';
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
        // открываем страницу зимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'ПОДОГРЕВ СТЕКЛА', 'front-heating');
     });

     it(`Check more in detail ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = `snapshot/screenshotOption/${nameBrowser}/heatedWindshield.png`;
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