describe('test dynamic light', () => {
    let conditions = 'Динамический поворотный свет';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page light', () => {
        browser.helpers.openSite();
        // открываем страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
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
        ctx.originalScreenshot = 'snapshot/screenshotExterior/dynamic.png';
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
            diff.image.write('./test/reports/allure-results/budget.png');
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