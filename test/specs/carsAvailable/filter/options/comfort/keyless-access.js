describe('test keyless-access', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('#react-tabs-10');
        // ожидаем появление последней картинки
        browser.waitForVisible('div:nth-child(7) .avn008_option-check_image img');
    });

     it('check checkbox keyless-access', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('KEYLESS ACCESS');
        // убираем условие
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_checkbox-self > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail about keyless-access', () => {
        // двигаем курсор к кнопке
        browser.moveToObject('div:nth-child(5) > div > div > div.avn008_option-check_more', 5, 5);
        // открываем всплывающее окно
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/keylessAccess.png';
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