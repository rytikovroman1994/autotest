describe('test dynamic r-line trim package', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page r-line trim package', () => {
        browser.helpers.openSite();
        // открываем страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // открываем страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Опции"]');
    });

     it('check checkbox dynamic r-line trim package', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('.checkbox[data-name="Пакет отделки R-line"]');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('R-LINE');
        // убираем условие
        browser.click('.checkbox[data-name="Пакет отделки R-line"]');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail about dynamic light', () => {
        // открываем всплывающее окно
        browser.click('.avn008_option-check_more[data-name="checkbox%Пакет отделки R-line"]');
        // ждём появления картинки
        browser.waitForVisible('.avn015_content .image-container');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/rline.png';
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