describe('test dynamic sunroof', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page sunroof', () => {
        browser.helpers.openSite();
        // открываем страницу экстерьер
        browser.click('#react-tabs-6');
        // открываем страницу свет
        browser.click('#react-tabs-18');
    });

     it('check checkbox dynamic sunroof', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_checkbox-self ');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПАНОРАМНЫЙ ЛЮК');
        // убираем условие
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_checkbox-self ');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail about dynamic light', () => {
        // открываем всплывающее окно
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/Luke.png';
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