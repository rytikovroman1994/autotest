describe('test light assist', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('#react-tabs-10');
        // открываем страницу асистенты
        browser.click('#react-tabs-16');
    });

     it('check checkbox light assist', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // перемещаем курсор к чекбоксу 
        browser.moveToObject('div:nth-child(4) > div > div >.avn008_option-check_checkbox-self');
        // включаем чекбокс
        browser.click('div:nth-child(4) > div > div >.avn008_option-check_checkbox-self');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('LIGHT ASSIST');
        // убираем условие
        browser.click('div:nth-child(4) > div > div >.avn008_option-check_checkbox-self');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail light assist', () => {
        // перемещаем курсор к чекбоксу
        browser.moveToObject('div:nth-child(4) > div > div > div.avn008_option-check_more'); 
        // открываем всплывающее окно
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/lightAssist.png';
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