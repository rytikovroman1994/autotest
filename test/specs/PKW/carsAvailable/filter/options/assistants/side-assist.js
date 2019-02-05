import PkwFilter from 'Pageobjects/pkw-filter.page.js';
import reporter from 'wdio-allure-reporter';
import Jimp from 'jimp';

describe('test side assist', function() {
    this.retries();
    // выносим часто используемое название условия комплектации
    let conditions = 'Система Side Assist';
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
        // открываем страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Система Side Assist"] img');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'SIDE ASSIST', 'side-assist');
     });

     it(`Check more in detail ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = `snapshot/screenshotOption/${nameBrowser}/sideAssist.png`;
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('Compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
      });

      // проверяем, что условие появилось в деталке машины
      it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
      });
});