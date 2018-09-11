describe('test materials', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page interior', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('#react-tabs-8');
    });

    // проверяем чекбокс кожа
    it('check checkbox materials leather', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(1) > div > div:nth-child(2) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('КОЖАНЫЙ САЛОН');
        // убираем условие
        browser.click('div:nth-child(1) > div > div:nth-child(2) > div > div > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс ткань
    it('check checkbox materials cloth', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(1) > div > div:nth-child(3) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('ТКАНЕВЫЙ САЛОН');
        // убираем условие
        browser.click('div:nth-child(1) > div > div:nth-child(3) > div > div > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });

    // проверяем чекбокс алькантара
    it('check checkbox materials Alcantara', () => {
        // проверяем что фильтр пуст
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
        // включаем чекбокс
        browser.click('div:nth-child(1) > div > div:nth-child(4) > div > div > label');
        // проверяем, что в фильтре появилось условие
        browser.waitForExist('.avn008_filter-value-item_image');
        const text = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(text).to.be.equal('САЛОН АЛЬКАНТАРА');
        // убираем условие
        browser.click('div:nth-child(1) > div > div:nth-child(4) > div > div > label');
        // проверяем, что условие пропало
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_image') === false,
        5000, "На странице уже есть одно условие фильтра");
    });
    // проверяем псплывающее окно скриншотом
    it('check more in detail about dynamic light', () => {
        // открываем всплывающее окно
        browser.click('.avn008_option-check_more');
        // ждём появления картинки
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/seats.png';
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