describe('test heated mirrors', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('#react-tabs-10');
        // открываем страницу зимний пакет
        browser.click('#react-tabs-18');
    });

     it('check checkbox heated mirrors', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(1) > div > div >.avn008_option-check_checkbox-self');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        // проверяем, что это именно фаркоп
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ПОДОГРЕВ ЗЕРКАЛ');
        // убираем условие
        browser.click('div:nth-child(1) > div > div >.avn008_option-check_checkbox-self');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
     });

     it('check more in detail heated mirrors', () => {
        // открываем всплывающее окно
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/heatedMirrors.png';
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