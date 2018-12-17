import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test adaptive cruise control', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Адаптивный круиз-контроль';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page options', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу 
        PkwFilter.options();
        // открываем страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Система Side Assist"] img');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'КРУИЗ-КОНТРОЛЬ', 'cruise-control');
     });

     it(`Check more in detail ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/cruiseControl.png';
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('Compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        const diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.01 || distance > 0.1) {
            // если большое различие, то сохраняем изображение с отличием
            diff.image.write(`./test/reports/allure-results/${conditions}.png`);
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.01);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
      });

      // проверяем, что условие появилось в деталке машины
      it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
      });
});