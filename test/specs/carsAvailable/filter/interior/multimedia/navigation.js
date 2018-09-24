describe('test navigaton', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page navigation', () => {
        browser.helpers.openSite();
        // открываем страницу интерьер
        browser.click('#react-tabs-8');
        // ожидаем появление картинки кресла
        browser.waitForVisible('.avn008_image-switcher_image');
        // открываем страницу мультимедиа
        browser.click('#react-tabs-18');
    });

     it('check checkbox navigation', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('НАВИГАЦИЯ');
        // убираем условие
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail about navigation', () => {
        // открываем всплывающее окно
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('.avn015_image picture img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/navigation.png';
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