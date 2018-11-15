describe('test alcantara materials', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Алькантара';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем работу чекбокса
    it(`Check checkboxes ${conditions}`, () => {
        browser.helpers.checkCheckboxNfz(conditions, 'САЛОН АЛЬКАНТАРА', 'seats-cloth');
    });

    // проверяем псплывающее окно скриншотом
    it('check more in detail about dynamic light', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
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

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Салон Алькантара');
        // проверяем
        expect(newArray).to.be.equal('Салон Алькантара');
      });
});