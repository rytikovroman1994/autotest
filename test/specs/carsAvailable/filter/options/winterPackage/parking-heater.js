describe('test heated Parking heater', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // открываем страницу зимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
    });

     it('check checkbox heated Parking heater', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // двигаем курсор до кнопки
        browser.moveToObject('.checkbox[data-name="Стояночный отопитель"]');
        // включаем чекбокс
        browser.click('.checkbox[data-name="Стояночный отопитель"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('СТОЯНОЧНЫЙ ОТОПИТЕЛЬ');
        // убираем условие
        browser.click('.checkbox[data-name="Стояночный отопитель"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail Parking heater', () => {
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Стояночный отопитель"]');
        // открываем всплывающее окно
        browser.click('.avn008_option-check_more[data-name="checkbox%Стояночный отопитель"]');
        // ждём появления картинки
        browser.waitForVisible('.avn015_content .image-container');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/parkingHeater.png';
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        expect(distance).to.be.below(0.1);
      });
});